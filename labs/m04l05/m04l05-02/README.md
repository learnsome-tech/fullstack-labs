# m04l05-02 · Idempotent Event Handler

**Lesson:** [Asynchronous Event Processing: Outbox Pattern & Queues](https://learnsome.tech/learn/fullstack-course/m04l05) (lesson 4.5, module 4: Realtime Comms & Data Synchronization) · Pro  
**Check:** Graded

## Goal

You can resolve distributed dual-write inconsistencies with the Transactional Outbox Pattern, build reliable asynchronous message relays, and design idempotent consumers.

## Files

- [`starter/idempotent_event_handler.tsx`](starter/idempotent_event_handler.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l05/m04l05-02/starter`
2. Read `idempotent_event_handler.tsx`.
3. Run it: `tsx idempotent_event_handler.tsx`.
4. Check it from the repository root: `./check m04l05-02`.

## Expected output

```text
First dispatch: PROCESSED
Replayed dispatch: SKIPPED_DUPLICATE
Total processed count: 1
Recorded order payload: order-99
```

## How to check

`./check m04l05-02` copies `starter/` into a scratch directory and runs `tsx idempotent_event_handler.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/fullstack-course/m04l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
