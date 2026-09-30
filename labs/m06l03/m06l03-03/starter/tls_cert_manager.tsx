interface TlsSecret { host: string; secret: string; expiresDays: number; }
const certs: TlsSecret[] = [
  { host: "app.fullstack.internal", secret: "tls-cert", expiresDays: 85 },
];

function verifyTlsTermination(host: string, secrets: TlsSecret[]) {
  const cert = secrets.find((s) => s.host === host);
  if (!cert) return { valid: false, reason: "NO_CERT" };
  const isValid = cert.expiresDays > 10;
  return { valid: isValid, secret: cert.secret, days: cert.expiresDays };
}

const status = verifyTlsTermination("app.fullstack.internal", certs);
console.log(`TLS valid: ${status.valid}`);
console.log(`Certificate secret: ${status.secret}`);
console.log(`Days until expiration: ${status.days}`);
