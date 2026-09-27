interface RolloutState { version: string; errorRate: number; }
function evaluateCanary(state: RolloutState, threshold: number) {
  if (state.errorRate > threshold) {
    return { status: "ROLLED_BACK", version: "v1.2.0", active: false };
  }
  return { status: "PROMOTED", version: state.version, active: true };
}

const healthy = evaluateCanary({ version: "v1.3.0", errorRate: 0.2 }, 1.0);
const breach = evaluateCanary({ version: "v1.3.0", errorRate: 4.8 }, 1.0);
console.log(`Healthy status: ${healthy.status}`);
console.log(`Breached status: ${breach.status}`);
console.log(`Fallback version: ${breach.version}`);
