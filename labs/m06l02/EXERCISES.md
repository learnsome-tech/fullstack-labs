# Exercises — Containerization Architecture: Multi-Stage Dockerfiles

Lesson `m06l02` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m06l02)

## Exercise 1: Engineer an Optimized Multi-Stage Dockerfile

1. Construct a multi-stage Dockerfile separating deps, builder, and runner.
2. Cache dependency layer installations using frozen lockfiles.
3. Copy only compiled production bundles into a distroless runtime stage.
4. Enforce non-root user execution to minimize vulnerability attack surface.

> **Hint**: Use USER node or USER 10001 in the final runner stage before CMD.


---

© LearnSome.tech · support@iwantto.learnsome.tech
