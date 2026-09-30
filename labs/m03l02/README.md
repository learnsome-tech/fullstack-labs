# m03l02 · OAuth2 & OpenID Connect: Social Auth & PKCE Flows

Module 3: Authentication, Authorization & Identity · lesson 3.2 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m03l02)

**Goal:** You can implement OAuth 2.0 authorization code flows with PKCE, mitigate code interception and login CSRF attacks, and extract verified claims from OpenID Connect ID tokens.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l02-02](m03l02-02/) | Pkce Verifier | Graded |
| [m03l02-03](m03l02-03/) | Oauth State Guard | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement an End-to-End OAuth2 PKCE Flow with OIDC

1. Implement code verifier and code challenge generation using SHA-256.
2. Guard the authorization redirection with cryptographic state parameters.
3. Verify that code verifiers match challenges during the token exchange.
4. Extract identity claims from validated OpenID Connect ID tokens.

> **Hint:** Use base64url encoding without padding characters for code challenges.

## Check yourself

- Why is the OAuth implicit grant deprecated in favor of Authorization Code with PKCE?
- How does the SHA-256 code challenge prevent intercepted authorization codes from being used?
- What vulnerability is prevented by verifying the state parameter during the OAuth callback?
- What is the semantic difference between an OpenID Connect ID Token and an Access Token?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
