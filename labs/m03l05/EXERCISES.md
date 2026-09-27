# Exercises — Multi-Tenant Identity: Tenant Isolation & Middleware

Lesson `m03l05` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m03l05)

## Exercise 1: Engineer Scoped Repositories and Tenant Middleware

1. Extract tenant identifiers strictly from verified authentication tokens.
2. Wrap database access methods with automatic tenant predicate filters.
3. Enforce tenant ID assignment on entity creation to prevent spoofing.
4. Implement connection checkout routines that clear tenant session state.

> **Hint**: Resolve tenantId in middleware and attach to AsyncLocalStorage context.


---

© LearnSome.tech · support@iwantto.learnsome.tech
