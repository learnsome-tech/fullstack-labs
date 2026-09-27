<img src="https://learnsome.tech/logo.png" width="48" alt="LearnSome.tech">

# Production Full-Stack Engineering

6 modules, 30 lessons: Full-Stack Architecture & Monorepos; API Contract Design & Type-Safe Comms; Authentication, Authorization & Identity; Realtime Comms & Data Synchronization; Distributed Observability & Resilience; Production Testing, CI/CD & Deployment.

## Watch and read

- **Course page**: [https://learnsome.tech/courses/fullstack-course](https://learnsome.tech/courses/fullstack-course)
- **Video player**: [https://learnsome.tech/courses/fullstack-course/watch](https://learnsome.tech/courses/fullstack-course/watch)
- **Handbook PDF**: [https://learnsome.tech/handbooks/fullstack/book.pdf](https://learnsome.tech/handbooks/fullstack/book.pdf)
- **On-site handbook**: [https://learnsome.tech/courses/fullstack-course/book](https://learnsome.tech/courses/fullstack-course/book)

## What is in this repository

This repository contains code artifacts, exercises and reference files for the lessons in this course.
30 lessons include a `labs/<lessonId>/` folder.
Each folder is named after the lesson identifier (e.g. `labs/m01l01/`) and contains the
artifact files shown in the course video, an `EXERCISES.md` with hands-on tasks, and
sub-directories named by artifact reference (e.g. `m01l01-02/`).

## Lessons

| # | Lesson | Watch | Labs | Handbook |
|---|--------|-------|------|----------|
| | **Full-Stack Architecture & Monorepos** | | | |
| 1 | Monorepo Architecture: Workspaces & Turborepo | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m01l01) | [labs/m01l01/](labs/m01l01/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-1-1) |
| 2 | End-to-End Type Safety: Shared Schemas & DTOs | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m01l02) | [labs/m01l02/](labs/m01l02/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-1-2) |
| 3 | Unified Build Pipelines: Caching & Dependency Graphs | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m01l03) | [labs/m01l03/](labs/m01l03/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-1-3) |
| 4 | Environment Configuration: Secrets & Multi-Stage | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m01l04) | [labs/m01l04/](labs/m01l04/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-1-4) |
| 5 | Database Access & Migrations: ORM & Data Layers | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m01l05) | [labs/m01l05/](labs/m01l05/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-1-5) |
| | **API Contract Design & Type-Safe Comms** | | | |
| 6 | API Contract Architecture: OpenAPI 3.1 & Schema Truth | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m02l01) | [labs/m02l01/](labs/m02l01/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-2-1) |
| 7 | Type-Safe Client Generation: Orval & Automated SDKs | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m02l02) | [labs/m02l02/](labs/m02l02/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-2-2) |
| 8 | Type-Safe RPC Architectures: tRPC & Procedures | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m02l03) | [labs/m02l03/](labs/m02l03/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-2-3) |
| 9 | Resilient Error Handling: Problem Details & Envelopes | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m02l04) | [labs/m02l04/](labs/m02l04/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-2-4) |
| 10 | API Gateway & BFF Patterns: Backend-for-Frontend | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m02l05) | [labs/m02l05/](labs/m02l05/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-2-5) |
| | **Authentication, Authorization & Identity** | | | |
| 11 | Session Architecture: HTTP-Only Cookies vs Tokens | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m03l01) | [labs/m03l01/](labs/m03l01/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-3-1) |
| 12 | OAuth2 & OpenID Connect: Social Auth & PKCE Flows | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m03l02) | [labs/m03l02/](labs/m03l02/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-3-2) |
| 13 | JWT Verification: Asymmetric Keys & Refresh Rotation | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m03l03) | [labs/m03l03/](labs/m03l03/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-3-3) |
| 14 | Role-Based & Attribute Access Control: RBAC & ABAC | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m03l04) | [labs/m03l04/](labs/m03l04/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-3-4) |
| 15 | Multi-Tenant Identity: Tenant Isolation & Middleware | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m03l05) | [labs/m03l05/](labs/m03l05/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-3-5) |
| | **Realtime Comms & Data Synchronization** | | | |
| 16 | Optimistic UI Architecture: Cache & Rollback Protocols | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m04l01) | [labs/m04l01/](labs/m04l01/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-4-1) |
| 17 | Server-Sent Events: Streaming Updates & Recovery | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m04l02) | [labs/m04l02/](labs/m04l02/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-4-2) |
| 18 | Bidirectional WebSockets: Reconnection & Heartbeats | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m04l03) | [labs/m04l03/](labs/m04l03/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-4-3) |
| 19 | Distributed Cache Invalidation: Redis & Tagged Purging | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m04l04) | [labs/m04l04/](labs/m04l04/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-4-4) |
| 20 | Asynchronous Event Processing: Outbox Pattern & Queues | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m04l05) | [labs/m04l05/](labs/m04l05/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-4-5) |
| | **Distributed Observability & Resilience** | | | |
| 21 | Distributed Tracing: OpenTelemetry & Traceparent | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m05l01) | [labs/m05l01/](labs/m05l01/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-5-1) |
| 22 | Structured Logging & Correlation IDs: Context Stitching | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m05l02) | [labs/m05l02/](labs/m05l02/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-5-2) |
| 23 | Resilience Engineering: Circuit Breakers & Retries | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m05l03) | [labs/m05l03/](labs/m05l03/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-5-3) |
| 24 | Traffic Management: Sliding Window Rate Limiting | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m05l04) | [labs/m05l04/](labs/m05l04/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-5-4) |
| 25 | Health Probes & Graceful Shutdown: Kubernetes Lifecycles | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m05l05) | [labs/m05l05/](labs/m05l05/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-5-5) |
| | **Production Testing, CI/CD & Deployment** | | | |
| 26 | End-to-End Testing with Playwright: Multi-Tier Suites | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m06l01) | [labs/m06l01/](labs/m06l01/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-6-1) |
| 27 | Containerization Architecture: Multi-Stage Dockerfiles | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m06l02) | [labs/m06l02/](labs/m06l02/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-6-2) |
| 28 | Kubernetes Ingress, Routing & TLS Termination | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m06l03) | [labs/m06l03/](labs/m06l03/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-6-3) |
| 29 | Continuous Delivery: Blue-Green & Canary Pipelines | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m06l04) | [labs/m06l04/](labs/m06l04/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-6-4) |
| 30 | Full-Stack System Verification: Capstone Integration | [▶](https://learnsome.tech/courses/fullstack-course/watch?lesson=m06l05) | [labs/m06l05/](labs/m06l05/) | [§](https://learnsome.tech/courses/fullstack-course/book#lesson-6-5) |

## Exercises

Each lesson folder contains an `EXERCISES.md` with hands-on tasks drawn directly from the course material.
Open the file for a lesson to see the tasks and, where provided, hints.

---

© LearnSome.tech · support@iwantto.learnsome.tech
