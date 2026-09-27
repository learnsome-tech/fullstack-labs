interface Item { id: string; text: string; }
let cache: Item[] = [{ id: "1", text: "Alpha" }];

function mutate(opt: Item, willFail: boolean) {
  const snapshot = [...cache];
  cache.push(opt); // Optimistic update
  if (willFail) {
    cache = snapshot; // Rollback
    return { ok: false, count: cache.length };
  }
  return { ok: true, count: cache.length };
}

console.log(`Initial count: ${cache.length}`);
const s = mutate({ id: "2", text: "Beta" }, false);
console.log(`Success count: ${s.count}`);

const f = mutate({ id: "3", text: "Gamma" }, true);
console.log(`Rollback count: ${f.count}`);
console.log(`Active ids: ${cache.map((i) => i.id).join(",")}`);
