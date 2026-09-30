function backoffDelay(attempt: number, baseMs: number, maxMs: number): number {
  const cap = Math.min(maxMs, baseMs * Math.pow(2, attempt));
  return Math.floor(cap * 0.5); // 50% jitter simulation
}

const t0 = backoffDelay(0, 100, 4000);
const t1 = backoffDelay(1, 100, 4000);
const t2 = backoffDelay(2, 100, 4000);
const t5 = backoffDelay(8, 100, 4000);

console.log(`Delay zero: ${t0}ms`);
console.log(`Delay one: ${t1}ms`);
console.log(`Delay two: ${t2}ms`);
console.log(`Delay capped: ${t5}ms`);
