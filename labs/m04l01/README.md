# m04l01 · Optimistic UI Architecture: Cache & Rollback Protocols

Module 4: Realtime Comms & Data Synchronization · lesson 4.1 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m04l01)

**Goal:** You can design optimistic UI architectures, manage snapshot and rollback lifecycles during mutations, and guarantee eventual consistency between client caches and servers.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l01-02](m04l01-02/) | Optimistic Simulation | Graded |
| [m04l01-03](m04l01-03/) | Mutation Lifecycle | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer an Optimistic UI Mutation with Cache Snapshots

1. Capture pre-mutation cache state within the onMutate callback.
2. Insert temporary optimistic entities to render instant UI responses.
3. Implement rollback logic in onError restoring the exact snapshot.
4. Trigger query invalidation in onSettled to enforce server consistency.

> **Hint:** Return { previousData } from onMutate and consume context in onError.

## Check yourself

- Why must outgoing queries be cancelled before applying an optimistic cache update?
- How does snapshotting cache state in onMutate protect against inconsistent UI state?
- What role does the onSettled callback play in optimistic mutation architecture?
- How should client applications distinguish temporary optimistic identifiers from server IDs?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
