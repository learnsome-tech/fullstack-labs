import { z } from "zod";

const ReqSchema = z.object({
  email: z.string().email(),
  role: z.enum(["admin", "user"]),
});

function validateContract(body: unknown) {
  const parsed = ReqSchema.safeParse(body);
  return parsed.success
    ? { ok: true, data: parsed.data }
    : { ok: false, err: parsed.error.issues[0].message };
}

const bad = validateContract({ email: "invalid", role: "admin" });
console.log(`Bad input valid: ${bad.ok}`);
console.log(`Bad input error: ${bad.err}`);

const good = validateContract({ email: "team@acme.com", role: "admin" });
console.log(`Good input valid: ${good.ok}`);
console.log(`Parsed user role: ${(good as any).data?.role}`);
