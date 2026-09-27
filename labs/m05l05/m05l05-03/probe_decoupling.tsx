interface ProbeReport { livenessStatus: string; readinessStatus: string; }

function evaluateProbes(
  processAlive: boolean, dbConnected: boolean
): ProbeReport {
  return {
    livenessStatus: processAlive ? "HEALTHY" : "CRASHED",
    readinessStatus: processAlive && dbConnected ? "READY" : "UNREADY",
  };
}

const normal = evaluateProbes(true, true);
console.log(`Normal ready: ${normal.readinessStatus}`);

const dbDown = evaluateProbes(true, false);
console.log(`DB down ready: ${dbDown.readinessStatus}`);
console.log(`DB down live: ${dbDown.livenessStatus}`);
