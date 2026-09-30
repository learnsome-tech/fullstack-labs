# m01l01 · Monorepo Architecture: Workspaces & Turborepo

Module 1: Full-Stack Architecture & Monorepos · lesson 1.1 · Free · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m01l01)

**Goal:** You can architect full-stack monorepos with pnpm and Turborepo, link shared workspace packages, resolve topological task graphs, and configure remote caching.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l01-02](m01l01-02/) | Monorepo Task Graph | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Configure a Turborepo Monorepo with Shared Schema Packages

1. Define pnpm-workspace.yaml organizing apps and packages.
2. Create turbo.json declaring build, lint, and test pipelines.
3. Link @acme/schemas into both Next.js web and Fastify API.
4. Verify that modifying schemas forces downstream application builds.

> **Hint:** Set dependsOn: ['^build'] in turbo.json to guarantee dependency order.

## Check yourself

- How does the caret symbol in Turborepo dependsOn: ['^build'] enforce topological order?
- Why are pnpm and Bun workspaces preferred over npm workspaces in modern full-stack monorepos?
- How does remote caching reduce continuous integration build times across a team?
- Why should shared configuration packages like tsconfig and eslint be placed in packages/?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
