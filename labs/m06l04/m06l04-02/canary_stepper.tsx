interface CanaryStep { weight: number; errorRate: number; }
const steps: CanaryStep[] = [
  { weight: 10, errorRate: 0.1 },
  { weight: 25, errorRate: 0.2 },
  { weight: 100, errorRate: 0.15 },
];

function canPromote(step: CanaryStep, maxErrors: number) {
  const isHealthy = step.errorRate <= maxErrors;
  return { proceed: isHealthy, weight: step.weight };
}

const res1 = canPromote(steps[0], 0.5);
const res2 = canPromote(steps[1], 0.5);
console.log(`Step one proceed: ${res1.proceed}, weight: ${res1.weight}`);
console.log(`Step two proceed: ${res2.proceed}, weight: ${res2.weight}`);
