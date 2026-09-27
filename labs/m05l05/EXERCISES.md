# Exercises — Health Probes & Graceful Shutdown: Kubernetes Lifecycles

Lesson `m05l05` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m05l05)

## Exercise 1: Engineer Kubernetes Health Probes and SIGTERM Handlers

1. Implement separate HTTP endpoints for liveness and readiness probes.
2. Wire database connection health checks exclusively into readiness.
3. Intercept SIGTERM signals to initiate a graceful shutdown sequence.
4. Drain active in-flight requests and close database pools before exit.

> **Hint**: Listen on process.on('SIGTERM') and set isShuttingDown = true immediately.


---

© LearnSome.tech · support@iwantto.learnsome.tech
