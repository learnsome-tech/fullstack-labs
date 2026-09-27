interface Session { id: string; user: string; }
const sessions = new Map<string, Session>([["s1", { id: "s1", user: "Ada" }]]);

function checkAuth(cookie: string | null, csrf: string | null, post: boolean) {
  if (!cookie) return { ok: false, err: "NO_COOKIE" };
  const s = sessions.get(cookie);
  if (!s) return { ok: false, err: "INVALID_SESSION" };
  if (post && csrf !== "token_valid") return { ok: false, err: "CSRF_ERROR" };
  return { ok: true, user: s.user };
}

const r1 = checkAuth(null, null, false);
console.log(`No cookie rejected: ${!r1.ok}`);

const r2 = checkAuth("s1", null, true);
console.log(`Post without CSRF rejected: ${!r2.ok}`);

const r3 = checkAuth("s1", "token_valid", true);
console.log(`Authenticated post user: ${r3.user}`);
