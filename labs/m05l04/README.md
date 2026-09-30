# m05l04 · Traffic Management: Sliding Window Rate Limiting

Module 5: Distributed Observability & Resilience · lesson 5.4 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m05l04)

**Goal:** You can design sliding window counter rate limiters, mitigate boundary burst vulnerabilities with linear interpolation, and enforce standard HTTP 429 throttling headers.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l04-02](m05l04-02/) | Rate Limiter | Graded |
| [m05l04-03](m05l04-03/) | Rate Limiter | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer a Sliding Window Rate Limiter Middleware

1. Implement a sliding window counter rate limiter algorithm.
2. Weight previous window request volumes against current window progress.
3. Emit standard RateLimit and Retry-After HTTP response headers.
4. Return HTTP 429 Too Many Requests status on quota exhaustion.

> **Hint:** Calculate windowProgress as (now - windowStart) / windowMs.

## Check yourself

- What vulnerability exists in fixed window rate limiters at window boundaries?
- Why is the sliding window counter algorithm preferred over sliding window logs?
- What HTTP status code and response headers should be emitted when rate limits are breached?
- How should rate limiting keys differ between public login endpoints and authenticated APIs?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
