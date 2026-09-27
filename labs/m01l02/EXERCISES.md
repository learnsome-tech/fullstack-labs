# Exercises — End-to-End Type Safety: Shared Schemas & DTOs

Lesson `m01l02` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m01l02)

## Exercise 1: Build an End-to-End Validated Checkout Schema Package

1. Create an OrderCheckoutSchema validating items, address, and totals.
2. Infer OrderCheckoutDTO using z.infer.
3. Simulate a client submission catching negative quantities.
4. Verify that server validation enforces currency formatting.

> **Hint**: Use z.array(z.object(...)) and refine validators for positive currency totals.


---

© LearnSome.tech · support@iwantto.learnsome.tech
