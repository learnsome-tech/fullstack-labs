interface Ctx { user?: { id: string }; }

function makeProcedure(authRequired: boolean) {
  return function execute(input: string, ctx: Ctx) {
    if (authRequired && !ctx.user) return { ok: false, err: "UNAUTHORIZED" };
    if (input.length < 3) return { ok: false, err: "TOO_SHORT" };
    return { ok: true, echo: input, userId: ctx.user?.id };
  };
}

const protectedProc = makeProcedure(true);
const r1 = protectedProc("hello", {});
console.log(`Anon call success: ${r1.ok}`);

const r2 = protectedProc("hi", { user: { id: "u1" } });
console.log(`Short input success: ${r2.ok}`);

const r3 = protectedProc("great", { user: { id: "u1" } });
console.log(`Authed call success: ${r3.ok}`);
console.log(`Caller user identifier: ${r3.userId}`);
