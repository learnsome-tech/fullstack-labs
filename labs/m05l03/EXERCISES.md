# Exercises — Resilience Engineering: Circuit Breakers & Retries

Lesson `m05l03` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m05l03)

## Exercise 1: Engineer a Three-State Circuit Breaker with Fallbacks

1. Implement a three-state circuit breaker with Closed, Open, and Half-Open.
2. Fail fast immediately when the circuit breaker is in the Open state.
3. Route a small volume of probationary requests during Half-Open.
4. Provide cached or degraded fallback responses when the circuit trips.

> **Hint**: Check now >= nextAttemptTime when state === OPEN to transition to HALF_OPEN.


---

© LearnSome.tech · support@iwantto.learnsome.tech
