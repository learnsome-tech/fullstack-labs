# m04l01-02 · Optimistic Simulation

**Lesson:** [Optimistic UI Architecture: Cache & Rollback Protocols](https://learnsome.tech/learn/fullstack-course/m04l01) (lesson 4.1, module 4: Realtime Comms & Data Synchronization) · Pro  
**Check:** Graded

## Goal

You can design optimistic UI architectures, manage snapshot and rollback lifecycles during mutations, and guarantee eventual consistency between client caches and servers.

## Files

- [`starter/optimistic_simulation.tsx`](starter/optimistic_simulation.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l01/m04l01-02/starter`
2. Read `optimistic_simulation.tsx`.
3. Run it: `tsx optimistic_simulation.tsx`.
4. Check it from the repository root: `./check m04l01-02`.

## Expected output

```text
Initial count: 1
Success count: 2
Rollback count: 2
Active ids: 1,2
```

## How to check

`./check m04l01-02` copies `starter/` into a scratch directory and runs `tsx optimistic_simulation.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/fullstack-course/m04l01) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
