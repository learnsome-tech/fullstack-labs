import { createHash } from "node:crypto";

function makeChallenge(verifier: string): string {
  return createHash("sha256").update(verifier).digest("hex").slice(0, 16);
}

function verifyExchange(v: string, expectedChallenge: string) {
  const c = makeChallenge(v);
  return c === expectedChallenge ? { ok: true } : { ok: false };
}

const myVerifier = "secret-client-verifier-string";
const challenge = makeChallenge(myVerifier);

const bad = verifyExchange("tampered-verifier", challenge);
console.log(`Tampered verifier exchange: ${bad.ok}`);

const good = verifyExchange(myVerifier, challenge);
console.log(`Valid verifier exchange: ${good.ok}`);
console.log(`Generated challenge: ${challenge}`);
