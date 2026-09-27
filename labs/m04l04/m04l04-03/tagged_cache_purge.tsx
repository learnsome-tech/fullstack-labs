const store = new Map<string, string>();
const tags = new Map<string, Set<string>>();

function setCache(k: string, v: string, tag: string) {
  store.set(k, v);
  if (!tags.has(tag)) tags.set(tag, new Set());
  tags.get(tag)!.add(k);
}
function purgeTag(tag: string) {
  const keys = tags.get(tag) ?? new Set();
  keys.forEach((k) => store.delete(k));
  tags.delete(tag);
}

setCache("item:1", "Book", "shop");
setCache("item:2", "Pen", "shop");
setCache("news:9", "Update", "blog");

purgeTag("shop");
console.log(`Has shop item one: ${store.has("item:1")}`);
console.log(`Has blog news item: ${store.has("news:9")}`);
console.log(`Remaining cache keys: ${store.size}`);
