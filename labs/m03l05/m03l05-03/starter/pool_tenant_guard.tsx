class PoolConnection {
  private tenant: string | null = null;

  setTenant(t: string) { this.tenant = t; }
  getTenant() { return this.tenant; }
  release() { this.tenant = null; }
}

const conn = new PoolConnection();
conn.setTenant("tenant_a");
console.log(`Active tenant: ${conn.getTenant()}`);

conn.release();
console.log(`Tenant cleared after release: ${conn.getTenant() === null}`);

conn.setTenant("tenant_b");
console.log(`Reused connection tenant: ${conn.getTenant()}`);
