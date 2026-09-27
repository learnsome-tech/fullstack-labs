# Exercises — Traffic Management: Sliding Window Rate Limiting

Lesson `m05l04` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m05l04)

## Exercise 1: Engineer a Sliding Window Rate Limiter Middleware

1. Implement a sliding window counter rate limiter algorithm.
2. Weight previous window request volumes against current window progress.
3. Emit standard RateLimit and Retry-After HTTP response headers.
4. Return HTTP 429 Too Many Requests status on quota exhaustion.

> **Hint**: Calculate windowProgress as (now - windowStart) / windowMs.


---

© LearnSome.tech · support@iwantto.learnsome.tech
