# Exercises — Session Architecture: HTTP-Only Cookies vs Tokens

Lesson `m03l01` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m03l01)

## Exercise 1: Engineer an Anti-CSRF Protected Session Engine

1. Serialize session cookies with HttpOnly, Secure, and SameSite Strict flags.
2. Bind session records to server-side stores with explicit TTL expirations.
3. Implement anti-CSRF token verification on state-changing POST requests.
4. Verify that client JavaScript cannot access session identifier strings.

> **Hint**: Prefix the cookie name with __Host- and reject mutating calls without CSRF.


---

© LearnSome.tech · support@iwantto.learnsome.tech
