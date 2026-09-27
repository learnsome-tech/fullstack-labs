interface HealthState { live: boolean; ready: boolean; inflight: number; }
const state: HealthState = { live: true, ready: true, inflight: 2 };

function sigterm() {
  state.ready = false; // Step 1: stop routing ingress traffic
  while (state.inflight > 0) { state.inflight--; } // Step 2: drain
  return { live: state.live, ready: state.ready, left: state.inflight };
}

console.log(`Initial live: ${state.live}`);
console.log(`Initial ready: ${state.ready}`);
const res = sigterm();
console.log(`Shutdown ready: ${res.ready}`);
console.log(`Remaining requests: ${res.left}`);
