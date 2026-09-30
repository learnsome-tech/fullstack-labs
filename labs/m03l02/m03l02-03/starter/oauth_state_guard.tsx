interface StateRecord { state: string; exp: number; }
const stateStore = new Map<string, StateRecord>();

function startFlow(stateId: string) {
  stateStore.set(stateId, { state: stateId, exp: Date.now() + 60000 });
}
function handleCallback(recv: string) {
  const item = stateStore.get(recv);
  if (!item || Date.now() > item.exp) return { ok: false };
  stateStore.delete(recv); // Single-use consumption
  return { ok: true };
}

startFlow("state_1");
const rej = handleCallback("state_fake");
console.log(`Forged state rejected: ${!rej.ok}`);
const acc = handleCallback("state_1");
console.log(`Valid state accepted: ${acc.ok}`);
const replay = handleCallback("state_1");
console.log(`Replayed state rejected: ${!replay.ok}`);
