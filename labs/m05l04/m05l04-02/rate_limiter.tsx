interface Win { count: number; }
const limits = new Map<string, number>();

function allow(id: string, maxReqs: number): { ok: boolean; left: number } {
  const c = limits.get(id) ?? 0;
  if (c >= maxReqs) return { ok: false, left: 0 };
  limits.set(id, c + 1);
  return { ok: true, left: maxReqs - (c + 1) };
}

const r1 = allow("user1", 2);
console.log(`First request allowed: ${r1.ok}`);
console.log(`Remaining capacity: ${r1.left}`);

const r2 = allow("user1", 2);
console.log(`Second request allowed: ${r2.ok}`);

const r3 = allow("user1", 2);
console.log(`Third request rejected: ${!r3.ok}`);
