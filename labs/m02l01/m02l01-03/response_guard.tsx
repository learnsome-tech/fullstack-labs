import { z } from "zod";

const UserRes = z.object({
  id: z.string(),
  name: z.string(),
  active: z.boolean(),
});

function sanitizeResponse(payload: unknown) {
  const parsed = UserRes.safeParse(payload);
  if (!parsed.success) {
    throw new Error(`Contract drift detected: ${parsed.error.issues[0].path}`);
  }
  return parsed.data;
}

const res = sanitizeResponse({ id: "u1", name: "Alice", active: true });
console.log(`Response validated: ${res.id}`);
console.log(`Response active: ${res.active}`);
