import { z } from "zod";

const EnvSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DB_URL: z.string().url(),
});

function parseEnv(raw: Record<string, string | undefined>) {
  const res = EnvSchema.safeParse(raw);
  return res.success ? { ok: true, data: res.data } : { ok: false };
}

const bad = parseEnv({ DB_URL: "invalid" });
console.log(`Bad config parsed: ${bad.ok}`);

const good = parseEnv({ PORT: "8080", DB_URL: "postgres://db:5432/app" });
console.log(`Good config parsed: ${good.ok}`);
if (good.ok) {
  console.log(`Parsed port number: ${good.data.PORT}`);
  console.log(`Port type: ${typeof good.data.PORT}`);
}
