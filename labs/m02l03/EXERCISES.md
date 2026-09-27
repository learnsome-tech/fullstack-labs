# Exercises — Type-Safe RPC Architectures: tRPC & Procedures

Lesson `m02l03` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m02l03)

## Exercise 1: Engineer a Protected tRPC Procedure with Session Injection

1. Construct a modular tRPC router with public and protected procedures.
2. Attach session context to requests via custom middleware handlers.
3. Validate input payloads with Zod schemas before procedure invocation.
4. Export router types to client workspaces without code generation steps.

> **Hint**: Use t.middleware to check ctx.user and call next with updated context.


---

© LearnSome.tech · support@iwantto.learnsome.tech
