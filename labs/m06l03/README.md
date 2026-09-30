# m06l03 · Kubernetes Ingress, Routing & TLS Termination

Module 6: Production Testing, CI/CD & Deployment · lesson 6.3 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m06l03)

**Goal:** You can design and configure Kubernetes Ingress controllers, path-based routing topologies, automated cert-manager TLS termination, and upstream readiness policies.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l03-02](m06l03-02/) | Ingress Route | Graded |
| [m06l03-03](m06l03-03/) | Ingress Route | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Configure Production Kubernetes Ingress Resource

1. Author an Ingress manifest specifying host rules for your domain.
2. Configure path routing directing slash api to BFF and slash to frontend.
3. Add cert-manager annotations for automated Let's Encrypt TLS issuance.
4. Set proxy timeout annotations to prevent premature connection drops.

> **Hint:** Specify cert-manager dot io slash cluster-issuer in metadata annotations.

## Check yourself

- What is the difference between an Ingress resource and an Ingress controller?
- How does longest-prefix path matching prevent the root slash path from hijacking API calls?
- Why is terminating TLS at the Ingress controller preferable to terminating inside application pods?
- How does cert-manager automate Let's Encrypt certificate acquisition and renewal?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
