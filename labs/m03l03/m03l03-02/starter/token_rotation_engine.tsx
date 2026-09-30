interface TokenState { current: string; prev: Set<string>; dead: boolean; }
const state: TokenState = { current: "tok-1", prev: new Set(), dead: false };

function rotate(sub: string) {
  if (state.dead) return { ok: false, err: "BREACH_REVOKED" };
  if (state.prev.has(sub)) {
    state.dead = true;
    return { ok: false, err: "REUSE_DETECTED" };
  }
  if (sub !== state.current) return { ok: false, err: "BAD_TOKEN" };
  state.prev.add(sub);
  state.current = `tok-${state.prev.size + 1}`;
  return { ok: true, next: state.current };
}

const r1 = rotate("tok-1");
console.log(`First rotation success: ${r1.ok}`);

const replay = rotate("tok-1");
console.log(`Replay detected: ${replay.err === "REUSE_DETECTED"}`);
console.log(`Session killed: ${state.dead}`);
