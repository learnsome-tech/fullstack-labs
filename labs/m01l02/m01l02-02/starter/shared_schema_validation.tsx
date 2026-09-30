import { z } from "zod";
const UserSchema = z.object({
  email: z.string().email(),
  age: z.number().int().min(18),
});
type UserDTO = z.infer<typeof UserSchema>;
const valid = UserSchema.safeParse({ email: "dev@acme.io", age: 25 });
const invalid = UserSchema.safeParse({ email: "invalid-email", age: 15 });
console.log(`Valid success: ${valid.success}`);
if (valid.success) {
  console.log(`Parsed email: ${valid.data.email}`);
  console.log(`Parsed age: ${valid.data.age}`);
}
console.log(`Invalid success: ${invalid.success}`);
if (!invalid.success) {
  console.log(`Error count: ${invalid.error.issues.length}`);
}
