# Exercises — Distributed Tracing: OpenTelemetry & Traceparent

Lesson `m05l01` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m05l01)

## Exercise 1: Implement OpenTelemetry Context Propagation Middleware

1. Parse the incoming W3C traceparent header in gateway middleware.
2. Spawn a child span that inherits the parent trace ID.
3. Inject the updated traceparent header into outgoing microservice calls.
4. Record span durations and HTTP status codes into telemetry collectors.

> **Hint**: Extract traceparent header and call tracer.startSpan with parent context.


---

© LearnSome.tech · support@iwantto.learnsome.tech
