# Exercises — Monorepo Architecture: Workspaces & Turborepo

Lesson `m01l01` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m01l01)

## Exercise 1: Configure a Turborepo Monorepo with Shared Schema Packages

1. Define pnpm-workspace.yaml organizing apps and packages.
2. Create turbo.json declaring build, lint, and test pipelines.
3. Link @acme/schemas into both Next.js web and Fastify API.
4. Verify that modifying schemas forces downstream application builds.

> **Hint**: Set dependsOn: ['^build'] in turbo.json to guarantee dependency order.


---

© LearnSome.tech · support@iwantto.learnsome.tech
