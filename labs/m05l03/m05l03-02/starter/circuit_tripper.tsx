type State = "CLOSED" | "OPEN";
let state: State = "CLOSED", fails = 0;

function callService(fail: boolean) {
  if (state === "OPEN") return { ok: false, err: "FAIL_FAST_OPEN" };
  if (fail) {
    fails++;
    if (fails >= 2) state = "OPEN";
    return { ok: false, err: "NETWORK_ERROR" };
  }
  fails = 0;
  return { ok: true, data: "PAYLOAD" };
}

console.log(`Call one: ${callService(true).err}`);
console.log(`Call two tripped: ${callService(true).err}`);
console.log(`Circuit state: ${state}`);
console.log(`Call three fail fast: ${callService(false).err}`);
