# m02l01 · API Contract Architecture: OpenAPI 3.1 & Schema Truth

Module 2: API Contract Design & Type-Safe Comms · lesson 2.1 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m02l01)

**Goal:** You can establish single-source-of-truth API contracts with OpenAPI 3.1, enforce bi-directional schema validation, and prevent server contract drift.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l01-02](m02l01-02/) | Contract Validator | Graded |
| [m02l01-03](m02l01-03/) | Contract Validator | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Architect an OpenAPI Validation Guard with Drift Detection

1. Define an OpenAPI three point one route specification with Zod schemas.
2. Implement incoming request body validation at the API gateway layer.
3. Enforce strict response schema checking to prevent server drift.
4. Verify that untyped attributes are stripped or rejected at runtime.

> **Hint:** Use safeParse on outgoing server responses during integration tests.

## Check yourself

- Why does OpenAPI three point one provide full compatibility with standard JSON Schema?
- How does response payload validation prevent silent breaking changes from shipping?
- Why is contract-first design superior to writing code and retrofitting documentation?
- How does schema validation at the gateway boundary protect internal domain services?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
