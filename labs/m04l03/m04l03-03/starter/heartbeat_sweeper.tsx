interface Conn { id: string; alive: boolean; }
const conns = new Map<string, Conn>([
  ["c1", { id: "c1", alive: true }],
  ["c2", { id: "c2", alive: false }],
]);

function sweep() {
  let pruned = 0;
  for (const [id, c] of conns.entries()) {
    if (!c.alive) { conns.delete(id); pruned++; }
    else { c.alive = false; }
  }
  return { active: conns.size, pruned };
}

const r1 = sweep();
console.log(`Pruned count: ${r1.pruned}`);
console.log(`Active count: ${r1.active}`);
conns.get("c1")!.alive = true;
const r2 = sweep();
console.log(`Second pruned: ${r2.pruned}`);
