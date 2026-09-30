type Key = readonly unknown[];

class QueryManager {
  private store = new Map<string, unknown>();

  set(key: Key, val: unknown) { this.store.set(JSON.stringify(key), val); }
  get(key: Key) { return this.store.get(JSON.stringify(key)); }
  invalidate(prefix: Key) {
    const p = JSON.stringify(prefix).slice(0, -1);
    for (const k of this.store.keys()) {
      if (k.startsWith(p)) this.store.delete(k);
    }
  }
  size() { return this.store.size; }
}

const qm = new QueryManager();
qm.set(["posts", "detail", "p1"], { title: "Architecture" });
qm.set(["posts", "detail", "p2"], { title: "Monorepos" });
console.log(`Initial entries: ${qm.size()}`);
qm.invalidate(["posts"]);
console.log(`Entries after invalidation: ${qm.size()}`);
