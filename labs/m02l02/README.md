# m02l02 · Type-Safe Client Generation: Orval & Automated SDKs

Module 2: API Contract Design & Type-Safe Comms · lesson 2.2 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m02l02)

**Goal:** You can generate end-to-end type-safe API clients, synthesize TanStack Query hooks with Orval, design deterministic query key factories, and manage cache invalidations.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l02-02](m02l02-02/) | Query Key Engine | Graded |
| [m02l02-03](m02l02-03/) | Cache Invalidation | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Configure Orval Generation with Key Factories

1. Configure code generation targeting OpenAPI endpoints.
2. Generate type-safe React query hooks and fetch clients.
3. Implement structured query key factories for fine-grained cache sweeps.
4. Verify that cache keys invalidate cleanly upon executing mutations.

> **Hint:** Set client to react-query in orval.config.ts and export query key factories.

## Check yourself

- Why is generating client SDKs superior to hand writing fetch wrapper functions?
- How does a hierarchical query key factory enable selective cache invalidation?
- What prevents UI stale data bugs when executing mutations across nested views?
- How does monorepo task orchestration keep generated clients aligned with API schemas?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
