interface Claims { sub: string; role: string; exp: number; }

function verifyTokenClaims(c: Claims, now: number): boolean {
  if (now > c.exp) return false;
  if (!c.sub || !c.role) return false;
  return true;
}

const activeClaims: Claims = {
  sub: "usr_99",
  role: "admin",
  exp: Date.now() + 60000,
};

const expiredClaims: Claims = {
  sub: "usr_99",
  role: "admin",
  exp: Date.now() - 1000,
};

console.log(`Active token valid: ${verifyTokenClaims(activeClaims, Date.now())}`);
console.log(`Expired token valid: ${verifyTokenClaims(expiredClaims, Date.now())}`);
