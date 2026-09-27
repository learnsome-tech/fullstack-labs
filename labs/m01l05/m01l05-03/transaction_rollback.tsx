interface Account { id: string; balance: number; }
const db = new Map<string, Account>([["a1", { id: "a1", balance: 200 }]]);

function transfer(fromId: string, toId: string, amt: number) {
  const from = db.get(fromId), snap = from?.balance ?? 0;
  try {
    if (!from || from.balance < amt) throw new Error("LOW_BALANCE");
    from.balance -= amt;
    if (toId === "bad") throw new Error("TARGET_MISSING");
    return { ok: true };
  } catch {
    if (from) from.balance = snap;
    return { ok: false };
  }
}

const f = transfer("a1", "bad", 50);
console.log(`Failed run rolled back: ${!f.ok}`);
console.log(`Balance after failure: ${db.get("a1")?.balance}`);
const s = transfer("a1", "good", 50);
console.log(`Committed run success: ${s.ok}`);
console.log(`Balance after success: ${db.get("a1")?.balance}`);
