# m01l05-02 · Transaction Rollback

**Lesson:** [Database Access & Migrations: ORM & Data Layers](https://learnsome.tech/learn/fullstack-course/m01l05) (lesson 1.5, module 1: Full-Stack Architecture & Monorepos) · Free  
**Check:** Graded

## Goal

You can design decoupled data access layers, enforce transactional atomicity across operations, manage ORM query performance, and execute zero-downtime expand-and-contract migrations.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/transaction_rollback.tsx`](starter/transaction_rollback.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l05/m01l05-02/starter`
2. Read `transaction_rollback.tsx`.
3. Run it: `tsx transaction_rollback.tsx`.
4. Check it from the repository root: `./check m01l05-02`.

## Expected output

```text
Failed run rolled back: true
Balance after failure: 200
Committed run success: true
Balance after success: 150
```

## How to check

`./check m01l05-02` copies `starter/` into a scratch directory and runs `tsx transaction_rollback.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/fullstack-course/m01l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
