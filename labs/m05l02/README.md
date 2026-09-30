# m05l02 · Structured Logging & Correlation IDs: Context Stitching

Module 5: Distributed Observability & Resilience · lesson 5.2 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m05l02)

**Goal:** You can architect structured JSON logging systems, stitch correlation IDs across asynchronous call stacks using AsyncLocalStorage, and redact sensitive telemetry metadata.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l02-02](m05l02-02/) | Context Logger | Graded |
| [m05l02-03](m05l02-03/) | Context Logger | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement an AsyncLocalStorage Logger with Redaction

1. Construct an AsyncLocalStorage context scope for inbound HTTP requests.
2. Bind incoming x-correlation-id headers to the active execution context.
3. Format all application output logs as structured JSON records.
4. Automatically redact sensitive keys before writing logs to stdout.

> **Hint:** Use asyncLocalStorage.run(context, next) inside Express or Fastly middleware.

## Check yourself

- Why are structured JSON logs superior to plain text console logs in cloud architectures?
- How does Node dot js AsyncLocalStorage facilitate ambient context propagation across async tasks?
- What security risks arise when logging middleware does not implement automated redaction?
- How do correlation IDs complement distributed tracing span IDs during incident investigations?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
