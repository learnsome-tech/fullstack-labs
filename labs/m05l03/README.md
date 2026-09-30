# m05l03 · Resilience Engineering: Circuit Breakers & Retries

Module 5: Distributed Observability & Resilience · lesson 5.3 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m05l03)

**Goal:** You can design three-state circuit breakers, prevent cascading failures and retry storms across microservices, and implement probationary half-open recovery protocols.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l03-02](m05l03-02/) | Circuit Tripper | Graded |
| [m05l03-03](m05l03-03/) | Circuit Tripper | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer a Three-State Circuit Breaker with Fallbacks

1. Implement a three-state circuit breaker with Closed, Open, and Half-Open.
2. Fail fast immediately when the circuit breaker is in the Open state.
3. Route a small volume of probationary requests during Half-Open.
4. Provide cached or degraded fallback responses when the circuit trips.

> **Hint:** Check now >= nextAttemptTime when state === OPEN to transition to HALF_OPEN.

## Check yourself

- What is a retry storm, and why does naive retry logic exacerbate downstream outages?
- What are the three states of a circuit breaker and what triggers transitions between them?
- Why must the Half-Open state only allow a restricted volume of trial requests?
- What fallback strategies can an application provide when a circuit breaker trips open?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
