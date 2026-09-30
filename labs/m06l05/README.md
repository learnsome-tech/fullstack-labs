# m06l05 · Full-Stack System Verification: Capstone Integration

Module 6: Production Testing, CI/CD & Deployment · lesson 6.5 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m06l05)

**Goal:** You can design and execute multi-tier end-to-end integration test suites verifying data persistence, transactional outboxes, distributed traces, and resilience fallbacks.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l05-02](m06l05-02/) | Capstone Runner | Graded |
| [m06l05-03](m06l05-03/) | Capstone Runner | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer the Complete Full-Stack Integration Suite

1. Construct an end-to-end integration test exercising all layers.
2. Verify multi-tenant session authentication and RBAC permissions.
3. Assert atomic state mutations and transactional outbox event queuing.
4. Inject network latency to confirm circuit breaker fallback activation.

> **Hint:** Assert that both database records and traceparent span records are populated.

## Check yourself

- Why are multi-tier integration tests essential alongside unit and contract tests?
- How does atomic outbox event emission prevent dual-write inconsistencies during distributed failures?
- What role does distributed trace propagation play when diagnosing issues across frontend and backend boundaries?
- How do circuit breakers and fallback queues prevent cascading system outages?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
