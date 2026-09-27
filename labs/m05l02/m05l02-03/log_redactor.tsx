function redactMeta(meta: Record<string, string>): Record<string, string> {
  const clean: Record<string, string> = {};
  const secretKeys = new Set(["password", "token", "secret"]);
  for (const [k, v] of Object.entries(meta)) {
    clean[k] = secretKeys.has(k) ? "[REDACTED]" : v;
  }
  return clean;
}

const input = { user: "alice", token: "jwt-xyz", role: "admin" };
const safe = redactMeta(input);

console.log(`User preserved: ${safe.user}`);
console.log(`Role preserved: ${safe.role}`);
console.log(`Token redacted: ${safe.token}`);
