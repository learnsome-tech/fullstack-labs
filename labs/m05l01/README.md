# m05l01 · Distributed Tracing: OpenTelemetry & Traceparent

Module 5: Distributed Observability & Resilience · lesson 5.1 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m05l01)

**Goal:** You can implement distributed tracing using OpenTelemetry standards, propagate W3C traceparent headers across network boundaries, and stitch full-stack request spans.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l01-02](m05l01-02/) | Traceparent Engine | Graded |
| [m05l01-03](m05l01-03/) | Traceparent Engine | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement OpenTelemetry Context Propagation Middleware

1. Parse the incoming W3C traceparent header in gateway middleware.
2. Spawn a child span that inherits the parent trace ID.
3. Inject the updated traceparent header into outgoing microservice calls.
4. Record span durations and HTTP status codes into telemetry collectors.

> **Hint:** Extract traceparent header and call tracer.startSpan with parent context.

## Check yourself

- What four fields comprise a standard W3C traceparent HTTP header?
- How does distributed tracing differ from traditional isolated application logging?
- Why must outgoing HTTP requests inject updated span IDs into the traceparent header?
- What purpose does the sampled flag at the end of the traceparent header serve?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
