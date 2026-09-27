# Exercises — Database Access & Migrations: ORM & Data Layers

Lesson `m01l05` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m01l05)

## Exercise 1: Engineer a Transactional Repository with Schema Evolution

1. Implement a repository pattern isolating SQL or ORM queries.
2. Wrap multi-table ledger transactions with automatic rollback logic.
3. Plan a three-step migration separating column addition from deprecation.
4. Verify that partial failures never leave orphaned database records.

> **Hint**: Use try-catch within transaction scopes and execute rollback on error.


---

© LearnSome.tech · support@iwantto.learnsome.tech
