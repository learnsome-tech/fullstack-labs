# m02l04 · Resilient Error Handling: Problem Details & Envelopes

Module 2: API Contract Design & Type-Safe Comms · lesson 2.4 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m02l04)

**Goal:** You can standardize full-stack error handling using RFC 9457 Problem Details, design resilient client-side error normalizers, and map server validation errors directly to UI forms.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l04-02](m02l04-02/) | Problem Normalizer | Graded |
| [m02l04-03](m02l04-03/) | Problem Factory | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement an RFC 9457 Error Middleware and Client Normalizer

1. Implement an RFC ninety-four fifty-seven Problem Details response factory.
2. Format structured invalidParams arrays for schema validation failures.
3. Build a client-side normalizer mapping errors into UI form state.
4. Embed distributed trace identifiers to facilitate incident debugging.

> **Hint:** Set Content-Type header to application/problem+json on error responses.

## Check yourself

- What core fields are defined by RFC ninety-four fifty-seven Problem Details?
- How does the invalidParams extension simplify client-side form error rendering?
- Why should correlation identifiers be included in client-facing error envelopes?
- What Content-Type header should be returned when serving Problem Details payloads?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
