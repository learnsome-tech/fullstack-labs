# m01l02-02 · Shared Schema Validation

**Lesson:** [End-to-End Type Safety: Shared Schemas & DTOs](https://learnsome.tech/learn/fullstack-course/m01l02) (lesson 1.2, module 1: Full-Stack Architecture & Monorepos) · Free  
**Check:** Graded

## Goal

You can eliminate contract drift across full-stack boundaries by defining shared runtime schemas with Zod, inferring static TypeScript DTOs, and validating I/O data.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/shared_schema_validation.tsx`](starter/shared_schema_validation.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l02/m01l02-02/starter`
2. Read `shared_schema_validation.tsx`.
3. Run it: `tsx shared_schema_validation.tsx`.
4. Check it from the repository root: `./check m01l02-02`.

## Expected output

```text
Valid success: true
Parsed email: dev@acme.io
Parsed age: 25
Invalid success: false
Error count: 2
```

## How to check

`./check m01l02-02` copies `starter/` into a scratch directory and runs `tsx shared_schema_validation.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/fullstack-course/m01l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
