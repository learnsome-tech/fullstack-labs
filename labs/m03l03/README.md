# m03l03 · JWT Verification: Asymmetric Keys & Refresh Rotation

Module 3: Authentication, Authorization & Identity · lesson 3.3 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m03l03)

**Goal:** You can verify JSON Web Tokens using asymmetric public keys, implement refresh token rotation with reuse detection, and safeguard microservice ecosystems.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l03-02](m03l03-02/) | Token Rotation Engine | Graded |
| [m03l03-03](m03l03-03/) | Claims Validator | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Asymmetric JWT Verification and Token Invalidation

1. Implement asymmetric JWT signing using an authorization server private key.
2. Verify tokens across microservices using public JSON Web Key Sets.
3. Enforce refresh token rotation and track token family trees.
4. Invalidate the entire token family immediately upon detecting reuse.

> **Hint:** Store revoked token family IDs in an in-memory or Redis denylist.

## Check yourself

- Why is asymmetric JWT signing safer than symmetric HMAC in distributed architectures?
- How does refresh token rotation detect that a token has been compromised by an attacker?
- Why should access tokens be configured with short lifetimes of fifteen minutes or less?
- What action must an authentication service take when a previously consumed refresh token is submitted?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
