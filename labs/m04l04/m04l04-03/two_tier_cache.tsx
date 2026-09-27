class TwoTierCache {
  private l1 = new Map<string, string>();
  private l2 = new Map<string, string>([["k1", "RedisValue"]]);

  get(k: string): { tier: string; val: string | null } {
    if (this.l1.has(k)) return { tier: "L1", val: this.l1.get(k)! };
    if (this.l2.has(k)) {
      const v = this.l2.get(k)!;
      this.l1.set(k, v); // Backfill L1
      return { tier: "L2", val: v };
    }
    return { tier: "MISS", val: null };
  }
}

const c = new TwoTierCache();
const r1 = c.get("k1");
console.log(`First lookup tier: ${r1.tier}`);
const r2 = c.get("k1");
console.log(`Second lookup tier: ${r2.tier}`);
console.log(`Retrieved value: ${r2.val}`);
