# m05l05 · Health Probes & Graceful Shutdown: Kubernetes Lifecycles

Module 5: Distributed Observability & Resilience · lesson 5.5 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m05l05)

**Goal:** You can design Kubernetes health probes, separate liveness from readiness semantics, and implement staged graceful shutdown sequences to eliminate deployment downtime.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l05-02](m05l05-02/) | Sigterm Drain | Graded |
| [m05l05-03](m05l05-03/) | Probe Decoupling | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer Kubernetes Health Probes and SIGTERM Handlers

1. Implement separate HTTP endpoints for liveness and readiness probes.
2. Wire database connection health checks exclusively into readiness.
3. Intercept SIGTERM signals to initiate a graceful shutdown sequence.
4. Drain active in-flight requests and close database pools before exit.

> **Hint:** Listen on process.on('SIGTERM') and set isShuttingDown = true immediately.

## Check yourself

- Why does including database health checks in a liveness probe cause restart death spirals?
- What action does Kubernetes take when a pod fails its readiness probe versus its liveness probe?
- Why must a container delay slightly between flipping readiness to unready and stopping its server?
- What occurs if a container takes longer to shut down than the terminationGracePeriodSeconds?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
