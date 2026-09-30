# m01l01-02 · Monorepo Task Graph

**Lesson:** [Monorepo Architecture: Workspaces & Turborepo](https://learnsome.tech/learn/fullstack-course/m01l01) (lesson 1.1, module 1: Full-Stack Architecture & Monorepos) · Free  
**Check:** Graded

## Goal

You can architect full-stack monorepos with pnpm and Turborepo, link shared workspace packages, resolve topological task graphs, and configure remote caching.

## Files

- [`starter/monorepo_task_graph.tsx`](starter/monorepo_task_graph.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l01/m01l01-02/starter`
2. Read `monorepo_task_graph.tsx`.
3. Run it: `tsx monorepo_task_graph.tsx`.
4. Check it from the repository root: `./check m01l01-02`.

## Expected output

```text
First: schemas
Total: 3
Before App: true
Before API: true
```

## How to check

`./check m01l01-02` copies `starter/` into a scratch directory and runs `tsx monorepo_task_graph.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/fullstack-course/m01l01) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
