# m02l03 · Type-Safe RPC Architectures: tRPC & Procedures

Module 2: API Contract Design & Type-Safe Comms · lesson 2.3 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m02l03)

**Goal:** You can architect end-to-end type-safe RPC systems with tRPC, design procedure pipelines with middleware and context, and analyze architectural tradeoffs versus REST.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l03-02](m02l03-02/) | Trpc Procedure Pipeline | Graded |
| [m02l03-03](m02l03-03/) | Router Inference | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer a Protected tRPC Procedure with Session Injection

1. Construct a modular tRPC router with public and protected procedures.
2. Attach session context to requests via custom middleware handlers.
3. Validate input payloads with Zod schemas before procedure invocation.
4. Export router types to client workspaces without code generation steps.

> **Hint:** Use t.middleware to check ctx.user and call next with updated context.

## Check yourself

- Why does tRPC not require an intermediate code generation step during development?
- How does export type AppRouter prevent backend implementation code leaking to clients?
- What architectural tradeoffs differentiate tRPC from standard REST with OpenAPI?
- How does procedure middleware enforce security policies before calling handlers?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
