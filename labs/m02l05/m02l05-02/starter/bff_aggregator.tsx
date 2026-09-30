interface User { id: string; name: string; }
interface Stats { count: number; }

async function aggregate(id: string, ok: boolean) {
  const u: User = { id, name: "Amara" };
  const s = await Promise.allSettled([
    Promise.resolve({ count: 42 }),
    ok ? Promise.resolve("ACTIVE") : Promise.reject(new Error("DOWN")),
  ]);
  const stats = s[0].status === "fulfilled" ? s[0].value.count : 0;
  const status = s[1].status === "fulfilled" ? s[1].value : "DEGRADED";
  return { user: u.name, stats, status };
}

const full = await aggregate("u1", true);
console.log(`Full status: ${full.status}`);
console.log(`Full stats: ${full.stats}`);

const degraded = await aggregate("u1", false);
console.log(`Degraded status: ${degraded.status}`);
console.log(`User preserved: ${degraded.user}`);
