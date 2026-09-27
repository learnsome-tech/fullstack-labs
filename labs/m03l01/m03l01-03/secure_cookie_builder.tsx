interface CookieConfig {
  name: string;
  value: string;
  maxAge: number;
}

function formatSecureCookie(cfg: CookieConfig): string {
  return [
    `__Host-${cfg.name}=${cfg.value}`,
    "Path=/",
    `Max-Age=${cfg.maxAge}`,
    "HttpOnly",
    "Secure",
    "SameSite=Strict",
  ].join("; ");
}

const header = formatSecureCookie({ name: "sess", value: "tok_xyz", maxAge: 3600 });
console.log(`Has Host prefix: ${header.startsWith("__Host-")}`);
console.log(`Has HttpOnly: ${header.includes("HttpOnly")}`);
console.log(`Has SameSite Strict: ${header.includes("SameSite=Strict")}`);
