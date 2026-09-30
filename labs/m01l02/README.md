# m01l02 · End-to-End Type Safety: Shared Schemas & DTOs

Module 1: Full-Stack Architecture & Monorepos · lesson 1.2 · Free · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m01l02)

**Goal:** You can eliminate contract drift across full-stack boundaries by defining shared runtime schemas with Zod, inferring static TypeScript DTOs, and validating I/O data.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l02-02](m01l02-02/) | Shared Schema Validation | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an End-to-End Validated Checkout Schema Package

1. Create an OrderCheckoutSchema validating items, address, and totals.
2. Infer OrderCheckoutDTO using z.infer.
3. Simulate a client submission catching negative quantities.
4. Verify that server validation enforces currency formatting.

> **Hint:** Use z.array(z.object(...)) and refine validators for positive currency totals.

## Check yourself

- Why does TypeScript type checking fail to protect applications from runtime API errors?
- How does z.infer<typeof Schema> eliminate duplicate interface declarations?
- What is the architectural advantage of using safeParse over parse in route handlers?
- Why should schema packages be free of framework-specific dependencies like React or Express?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
