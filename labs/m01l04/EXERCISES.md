# Exercises — Environment Configuration: Secrets & Multi-Stage

Lesson `m01l04` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m01l04)

## Exercise 1: Implement Resilient Multi-Stage Environment Guards

1. Define schema validation rules for full-stack environments.
2. Enforce public prefix gating to shield private database secrets.
3. Mask sensitive tokens before logging or diagnosing deployment state.
4. Validate process termination when required secret keys are absent.

> **Hint**: Use Zod safeParse at the entrypoint and abort startup on failure.


---

© LearnSome.tech · support@iwantto.learnsome.tech
