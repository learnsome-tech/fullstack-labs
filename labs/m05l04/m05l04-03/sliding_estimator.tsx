function estimateRate(
  prev: number, curr: number, prog: number
): number {
  return Math.floor(prev * (1 - prog) + curr);
}

const mid = estimateRate(10, 2, 0.5);
console.log(`Midpoint estimate: ${mid}`);

const late = estimateRate(10, 2, 0.8);
console.log(`Late window estimate: ${late}`);

const end = estimateRate(10, 2, 1.0);
console.log(`End window estimate: ${end}`);
