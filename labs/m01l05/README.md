# m01l05 · Database Access & Migrations: ORM & Data Layers

Module 1: Full-Stack Architecture & Monorepos · lesson 1.5 · Free · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m01l05)

**Goal:** You can design decoupled data access layers, enforce transactional atomicity across operations, manage ORM query performance, and execute zero-downtime expand-and-contract migrations.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l05-02](m01l05-02/) | Transaction Rollback | Graded |
| [m01l05-03](m01l05-03/) | Expand Contract Migration | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer a Transactional Repository with Schema Evolution

1. Implement a repository pattern isolating SQL or ORM queries.
2. Wrap multi-table ledger transactions with automatic rollback logic.
3. Plan a three-step migration separating column addition from deprecation.
4. Verify that partial failures never leave orphaned database records.

> **Hint:** Use try-catch within transaction scopes and execute rollback on error.

## Check yourself

- Why does immediate column renaming in production cause downtime during rolling deployments?
- How does the expand and contract pattern maintain backwards compatibility during migrations?
- What mechanism guarantees that multi-entity updates roll back if an error occurs mid-stream?
- Why should database access logic be contained in repositories rather than frontend components?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
