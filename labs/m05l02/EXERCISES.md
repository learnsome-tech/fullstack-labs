# Exercises — Structured Logging & Correlation IDs: Context Stitching

Lesson `m05l02` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m05l02)

## Exercise 1: Implement an AsyncLocalStorage Logger with Redaction

1. Construct an AsyncLocalStorage context scope for inbound HTTP requests.
2. Bind incoming x-correlation-id headers to the active execution context.
3. Format all application output logs as structured JSON records.
4. Automatically redact sensitive keys before writing logs to stdout.

> **Hint**: Use asyncLocalStorage.run(context, next) inside Express or Fastly middleware.


---

© LearnSome.tech · support@iwantto.learnsome.tech
