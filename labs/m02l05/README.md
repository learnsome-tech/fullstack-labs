# m02l05 · API Gateway & BFF Patterns: Backend-for-Frontend

Module 2: API Contract Design & Type-Safe Comms · lesson 2.5 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m02l05)

**Goal:** You can architect Backend-for-Frontend services, orchestrate data aggregation across microservices, isolate frontend views from upstream changes, and implement graceful degradation.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l05-02](m02l05-02/) | Bff Aggregator | Graded |
| [m02l05-03](m02l05-03/) | Bff Aggregator | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer a Resilient BFF Aggregation Handler

1. Construct a dedicated Backend-for-Frontend aggregation handler.
2. Dispatch concurrent requests using Promise allSettled.
3. Implement graceful degradation fallbacks when secondary services fail.
4. Shape upstream microservice responses into a tailored UI view model.

> **Hint:** Use Promise.allSettled to ensure non-critical service timeouts do not abort.

## Check yourself

- What architectural responsibilities distinguish an API Gateway from a BFF?
- How does parallel fetching with Promise allSettled enable graceful degradation?
- Why should upstream microservice data models never be exposed directly to browsers?
- How does the BFF pattern reduce mobile and web client battery and network consumption?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
