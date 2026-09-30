interface User { id: string; name: string; }
const cache = new Map<string, User>();

const keys = {
  all: ["users"] as const,
  detail: (id: string) => [...keys.all, "detail", id] as const,
};

function fetchUser(id: string): User {
  const k = JSON.stringify(keys.detail(id));
  if (!cache.has(k)) cache.set(k, { id, name: `User-${id}` });
  return cache.get(k)!;
}

const u1 = fetchUser("10");
console.log(`User name: ${u1.name}`);
console.log(`Cache key: ${JSON.stringify(keys.detail("10"))}`);
console.log(`Total cached: ${cache.size}`);
