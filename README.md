<p>
  <a href="https://learnsome.tech/courses/fullstack-course">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset=".github/assets/wordmark-inverse.svg">
      <img src=".github/assets/wordmark.svg" alt="LearnSome.tech" width="260">
    </picture>
  </a>
</p>

# Production Full-Stack Engineering

**Monorepos, Typed API Contracts, Identity, Realtime Data & Delivery**

6 modules, 30 lessons: Full-Stack Architecture & Monorepos; API Contract Design & Type-Safe Comms; Authentication, Authorization & Identity; Realtime Comms & Data Synchronization; Distributed Observability & Resilience; Production Testing, CI/CD & Deployment. Advanced level, about 1 hour.

This repository holds the labs of the LearnSome.tech course [Production Full-Stack Engineering](https://learnsome.tech/courses/fullstack-course): each lab's starter files, a README with the goal, the steps and the expected output, and `./check`, which tests your work the way the site does.

## Start

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/learnsome-tech/fullstack-labs?quickstart=1)

- **Codespaces:** the badge opens this repository in a dev container with Node.js 24.21.0, as in the site's lab sandbox.
- **On your machine:**

  ```sh
  git clone https://github.com/learnsome-tech/fullstack-labs.git
  cd fullstack-labs
  npm ci
  ./check m01l01-02
  ```

  You need Node.js for `./check`, and for the labs themselves Node.js 24.21.0. Other versions mostly work, but only the sandbox's versions are sure to print what the site prints. VS Code's Dev Containers extension builds the same container as Codespaces (x86-64).

## Doing a lab

1. Open the lesson on LearnSome.tech and the lab folder beside it: `labs/<lesson>/<lab>/`. The lab README has the goal, the steps and the expected output.
2. Work in the lab's `starter/` folder.
3. From the repository root, run `./check <lab>` (for example `./check m01l01-02`), or `./check <lesson>` for all labs of a lesson, or `./check --all`. `./check --list` shows every lab and how it is checked.

`./check` runs your starter the way the site's lab sandbox does: in a scratch copy that is its working directory and `HOME`, with `LANG=C.UTF-8`, `TZ=UTC`, `input.txt` on standard input, 10 seconds and 256 KiB of output per stream. It then compares the output with the site's own rules, so a pass here is a pass on the site.

| Check | What `./check` does | Labs |
| --- | --- | --- |
| Graded | Runs the program and compares its output with `expected.txt`. | 30 |
| Read along | Nothing to run here: the site shows the listing read-only, and the lab README says honestly what it needs (Docker, a cluster, a cloud account...). | 28 |

## What is published, and what is not

Every lab's starter is the code the lesson shows on screen, which is also what the lab editor on the site opens with. Where that code is the whole program, such as a recorded shell session or a script from the video, it is published as it is: it is the lesson content. Nothing beyond the lesson is published. There are no reference solutions and no answers to the lesson exercises, and nothing the site keeps private.

Pro lessons' labs are here as starters too. LearnSome.tech runs and grades your labs in its sandbox, hosts the videos and keeps your progress; running and grading a Pro lab on the site needs Pro.

## Modules and lessons

### Module 1: Full-Stack Architecture & Monorepos

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 1.1 | [Monorepo Architecture: Workspaces & Turborepo](https://learnsome.tech/learn/fullstack-course/m01l01) | [1 lab](labs/m01l01/) | Free |
| 1.2 | [End-to-End Type Safety: Shared Schemas & DTOs](https://learnsome.tech/learn/fullstack-course/m01l02) | [1 lab](labs/m01l02/) | Free |
| 1.3 | [Unified Build Pipelines: Caching & Dependency Graphs](https://learnsome.tech/learn/fullstack-course/m01l03) | [2 labs](labs/m01l03/) | Free |
| 1.4 | [Environment Configuration: Secrets & Multi-Stage](https://learnsome.tech/learn/fullstack-course/m01l04) | [2 labs](labs/m01l04/) | Free |
| 1.5 | [Database Access & Migrations: ORM & Data Layers](https://learnsome.tech/learn/fullstack-course/m01l05) | [2 labs](labs/m01l05/) | Free |

### Module 2: API Contract Design & Type-Safe Comms

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 2.1 | [API Contract Architecture: OpenAPI 3.1 & Schema Truth](https://learnsome.tech/learn/fullstack-course/m02l01) | [2 labs](labs/m02l01/) | Pro |
| 2.2 | [Type-Safe Client Generation: Orval & Automated SDKs](https://learnsome.tech/learn/fullstack-course/m02l02) | [2 labs](labs/m02l02/) | Pro |
| 2.3 | [Type-Safe RPC Architectures: tRPC & Procedures](https://learnsome.tech/learn/fullstack-course/m02l03) | [2 labs](labs/m02l03/) | Pro |
| 2.4 | [Resilient Error Handling: Problem Details & Envelopes](https://learnsome.tech/learn/fullstack-course/m02l04) | [2 labs](labs/m02l04/) | Pro |
| 2.5 | [API Gateway & BFF Patterns: Backend-for-Frontend](https://learnsome.tech/learn/fullstack-course/m02l05) | [2 labs](labs/m02l05/) | Pro |

### Module 3: Authentication, Authorization & Identity

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 3.1 | [Session Architecture: HTTP-Only Cookies vs Tokens](https://learnsome.tech/learn/fullstack-course/m03l01) | [2 labs](labs/m03l01/) | Pro |
| 3.2 | [OAuth2 & OpenID Connect: Social Auth & PKCE Flows](https://learnsome.tech/learn/fullstack-course/m03l02) | [2 labs](labs/m03l02/) | Pro |
| 3.3 | [JWT Verification: Asymmetric Keys & Refresh Rotation](https://learnsome.tech/learn/fullstack-course/m03l03) | [2 labs](labs/m03l03/) | Pro |
| 3.4 | [Role-Based & Attribute Access Control: RBAC & ABAC](https://learnsome.tech/learn/fullstack-course/m03l04) | [2 labs](labs/m03l04/) | Pro |
| 3.5 | [Multi-Tenant Identity: Tenant Isolation & Middleware](https://learnsome.tech/learn/fullstack-course/m03l05) | [2 labs](labs/m03l05/) | Pro |

### Module 4: Realtime Comms & Data Synchronization

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 4.1 | [Optimistic UI Architecture: Cache & Rollback Protocols](https://learnsome.tech/learn/fullstack-course/m04l01) | [2 labs](labs/m04l01/) | Pro |
| 4.2 | [Server-Sent Events: Streaming Updates & Recovery](https://learnsome.tech/learn/fullstack-course/m04l02) | [2 labs](labs/m04l02/) | Pro |
| 4.3 | [Bidirectional WebSockets: Reconnection & Heartbeats](https://learnsome.tech/learn/fullstack-course/m04l03) | [2 labs](labs/m04l03/) | Pro |
| 4.4 | [Distributed Cache Invalidation: Redis & Tagged Purging](https://learnsome.tech/learn/fullstack-course/m04l04) | [2 labs](labs/m04l04/) | Pro |
| 4.5 | [Asynchronous Event Processing: Outbox Pattern & Queues](https://learnsome.tech/learn/fullstack-course/m04l05) | [2 labs](labs/m04l05/) | Pro |

### Module 5: Distributed Observability & Resilience

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 5.1 | [Distributed Tracing: OpenTelemetry & Traceparent](https://learnsome.tech/learn/fullstack-course/m05l01) | [2 labs](labs/m05l01/) | Pro |
| 5.2 | [Structured Logging & Correlation IDs: Context Stitching](https://learnsome.tech/learn/fullstack-course/m05l02) | [2 labs](labs/m05l02/) | Pro |
| 5.3 | [Resilience Engineering: Circuit Breakers & Retries](https://learnsome.tech/learn/fullstack-course/m05l03) | [2 labs](labs/m05l03/) | Pro |
| 5.4 | [Traffic Management: Sliding Window Rate Limiting](https://learnsome.tech/learn/fullstack-course/m05l04) | [2 labs](labs/m05l04/) | Pro |
| 5.5 | [Health Probes & Graceful Shutdown: Kubernetes Lifecycles](https://learnsome.tech/learn/fullstack-course/m05l05) | [2 labs](labs/m05l05/) | Pro |

### Module 6: Production Testing, CI/CD & Deployment

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 6.1 | [End-to-End Testing with Playwright: Multi-Tier Suites](https://learnsome.tech/learn/fullstack-course/m06l01) | [2 labs](labs/m06l01/) | Pro |
| 6.2 | [Containerization Architecture: Multi-Stage Dockerfiles](https://learnsome.tech/learn/fullstack-course/m06l02) | [2 labs](labs/m06l02/) | Pro |
| 6.3 | [Kubernetes Ingress, Routing & TLS Termination](https://learnsome.tech/learn/fullstack-course/m06l03) | [2 labs](labs/m06l03/) | Pro |
| 6.4 | [Continuous Delivery: Blue-Green & Canary Pipelines](https://learnsome.tech/learn/fullstack-course/m06l04) | [2 labs](labs/m06l04/) | Pro |
| 6.5 | [Full-Stack System Verification: Capstone Integration](https://learnsome.tech/learn/fullstack-course/m06l05) | [2 labs](labs/m06l05/) | Pro |

**Free** lessons are open to anyone with a free LearnSome.tech account; **Pro** lessons need a Pro membership to watch, run and grade on the site.

## Licence

- **Code** (starter files, `check` and `.learnsome/`, the dev container and the workflows) is under the [MIT licence](LICENSE).
- **Written text** (the READMEs, lab instructions, lesson text, exercises and questions) is under [CC BY-NC-SA 4.0](LICENSE-text.md): share and adapt it with attribution to LearnSome.tech, not commercially, under the same licence.
- The LearnSome.tech name and logo are not covered by either licence.

## Contributing and security

This repository is generated from the course. Report a broken lab or a content error [as an issue](../../issues/new/choose); see [CONTRIBUTING.md](CONTRIBUTING.md). Security reports go to [SECURITY.md](SECURITY.md).

© 2026 LearnSome.tech
