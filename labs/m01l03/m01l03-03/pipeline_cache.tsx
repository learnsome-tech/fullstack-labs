interface CacheItem { hash: string; out: string; }
const store = new Map<string, CacheItem>();

function runBuild(id: string, hash: string): { status: string; out: string } {
  const hit = store.get(hash);
  if (hit) return { status: "HIT", out: hit.out };
  const out = `artifact-${id}-${hash.slice(0, 4)}`;
  store.set(hash, { hash, out });
  return { status: "MISS", out };
}

const res1 = runBuild("web", "a1b2c3d4");
console.log(`Run one status: ${res1.status}`);
console.log(`Run one output: ${res1.out}`);

const res2 = runBuild("web", "a1b2c3d4");
console.log(`Run two status: ${res2.status}`);

const res3 = runBuild("web", "e5f6g7h8");
console.log(`Run three status: ${res3.status}`);
