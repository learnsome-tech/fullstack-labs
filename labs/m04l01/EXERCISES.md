# Exercises — Optimistic UI Architecture: Cache & Rollback Protocols

Lesson `m04l01` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m04l01)

## Exercise 1: Engineer an Optimistic UI Mutation with Cache Snapshots

1. Capture pre-mutation cache state within the onMutate callback.
2. Insert temporary optimistic entities to render instant UI responses.
3. Implement rollback logic in onError restoring the exact snapshot.
4. Trigger query invalidation in onSettled to enforce server consistency.

> **Hint**: Return { previousData } from onMutate and consume context in onError.


---

© LearnSome.tech · support@iwantto.learnsome.tech
