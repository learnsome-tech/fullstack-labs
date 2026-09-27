interface BreakerResult { tripped: boolean; state: string; fallback: boolean; }
function runWithResilience(failures: number, threshold: number): BreakerResult {
  const isOpen = failures >= threshold;
  return {
    tripped: isOpen,
    state: isOpen ? "OPEN" : "CLOSED",
    fallback: isOpen,
  };
}

const normal = runWithResilience(1, 3);
const degraded = runWithResilience(4, 3);
console.log(`Normal breaker state: ${normal.state}`);
console.log(`Degraded breaker state: ${degraded.state}`);
console.log(`Fallback retry queued: ${degraded.fallback}`);
