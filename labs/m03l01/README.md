# m03l01 · Session Architecture: HTTP-Only Cookies vs Tokens

Module 3: Authentication, Authorization & Identity · lesson 3.1 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m03l01)

**Goal:** You can architect resilient session management systems, secure session storage against XSS using HTTP-only SameSite cookies, and implement CSRF defenses for stateful requests.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l01-02](m03l01-02/) | Session Auth Guard | Graded |
| [m03l01-03](m03l01-03/) | Secure Cookie Builder | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer an Anti-CSRF Protected Session Engine

1. Serialize session cookies with HttpOnly, Secure, and SameSite Strict flags.
2. Bind session records to server-side stores with explicit TTL expirations.
3. Implement anti-CSRF token verification on state-changing POST requests.
4. Verify that client JavaScript cannot access session identifier strings.

> **Hint:** Prefix the cookie name with __Host- and reject mutating calls without CSRF.

## Check yourself

- Why does storing access tokens in localStorage leave applications vulnerable to XSS?
- What security constraints are enforced by the browser __Host- cookie prefix?
- How does the SameSite attribute mitigate cross-site request forgery attacks?
- Why must mutating requests still verify anti-CSRF tokens when using cookies?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
