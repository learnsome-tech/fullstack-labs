# m06l04 · Continuous Delivery: Blue-Green & Canary Pipelines

Module 6: Production Testing, CI/CD & Deployment · lesson 6.4 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m06l04)

**Goal:** You can design and operate progressive delivery pipelines, implement canary traffic splitting, define composite health SLIs, and automate immediate rollbacks.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l04-02](m06l04-02/) | Canary Stepper | Graded |
| [m06l04-03](m06l04-03/) | Canary Stepper | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Construct an Argo Rollout Canary Pipeline

1. Define an Argo Rollouts resource with stepped canary percentages.
2. Integrate Prometheus AnalysisTemplates monitoring HTTP 5xx rates.
3. Set strict p99 latency thresholds to detect database query regressions.
4. Configure automated rollback triggers and webhook alerting.

> **Hint:** Use steps with setWeight and pause duration properties in the spec.

## Check yourself

- What is the key advantage of progressive canary rollouts compared to traditional all-at-once deployments?
- Why should automated rollback criteria evaluate both error rate spikes and latency degradation?
- How does traffic splitting differ when applied at the API gateway layer versus a service mesh?
- What happens to the canary pods when an automated analysis detects an SLI breach?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
