interface RawConfig {
  NEXT_PUBLIC_API_URL: string;
  DATABASE_SECRET: string;
}

function filterClientSafe<T extends Record<string, unknown>>(cfg: T) {
  const safe: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(cfg)) {
    if (k.startsWith("NEXT_PUBLIC_")) safe[k] = v;
  }
  return safe;
}

const raw: RawConfig = {
  NEXT_PUBLIC_API_URL: "https://api.acme.com",
  DATABASE_SECRET: "db-super-secret-password",
};

const clientBundle = filterClientSafe(raw);
console.log(`Public url exposed: ${"NEXT_PUBLIC_API_URL" in clientBundle}`);
console.log(`Secret key leaked: ${"DATABASE_SECRET" in clientBundle}`);
console.log(`Total public keys: ${Object.keys(clientBundle).length}`);
