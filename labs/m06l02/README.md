# m06l02 · Containerization Architecture: Multi-Stage Dockerfiles

Module 6: Production Testing, CI/CD & Deployment · lesson 6.2 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m06l02)

**Goal:** You can architect production-grade multi-stage Dockerfiles, minimize container footprint with distroless images, leverage layer caching, and enforce non-root security.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l02-02](m06l02-02/) | Container Stages | Graded |
| [m06l02-03](m06l02-03/) | Artifact Filter | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer an Optimized Multi-Stage Dockerfile

1. Construct a multi-stage Dockerfile separating deps, builder, and runner.
2. Cache dependency layer installations using frozen lockfiles.
3. Copy only compiled production bundles into a distroless runtime stage.
4. Enforce non-root user execution to minimize vulnerability attack surface.

> **Hint:** Use USER node or USER 10001 in the final runner stage before CMD.

## Check yourself

- Why is shipping development dependencies and compilers into production containers dangerous?
- How does copying package.json and lockfiles in a separate Docker layer optimize build caching?
- What security protections are gained by running containers as a non-root user?
- What is the difference between a standard Node base image and a distroless runtime container?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
