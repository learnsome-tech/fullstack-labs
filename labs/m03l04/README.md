# m03l04 · Role-Based & Attribute Access Control: RBAC & ABAC

Module 3: Authentication, Authorization & Identity · lesson 3.4 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m03l04)

**Goal:** You can design hybrid RBAC and ABAC policy engines, evaluate granular resource ownership checks, and prevent Broken Object Level Authorization vulnerabilities.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l04-02](m03l04-02/) | Ownership Evaluator | Graded |
| [m03l04-03](m03l04-03/) | Abac Policy Eval | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer an ABAC Policy Engine with BOLA Protections

1. Construct an ABAC policy evaluator evaluating subject and resource traits.
2. Implement resource ownership verification to prevent BOLA vulnerabilities.
3. Guard API endpoints using server-side policy enforcement middleware.
4. Verify that hiding UI elements never substitutes for server authorization.

> **Hint:** Check subject.id === resource.ownerId inside the policy enforce method.

## Check yourself

- Why does Role-Based Access Control struggle to model fine-grained resource ownership?
- How does Attribute-Based Access Control mitigate Broken Object Level Authorization (BOLA)?
- Why is hiding UI components insufficient to enforce security boundaries?
- What attributes are typically evaluated in an ABAC policy rule?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
