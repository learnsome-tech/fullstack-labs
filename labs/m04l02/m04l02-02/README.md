# m04l02-02 · Sse Recovery

**Lesson:** [Server-Sent Events: Streaming Updates & Recovery](https://learnsome.tech/learn/fullstack-course/m04l02) (lesson 4.2, module 4: Realtime Comms & Data Synchronization) · Pro  
**Check:** Graded

## Goal

You can design unidirectional streaming architectures with Server-Sent Events, format SSE protocol frames, manage Last-Event-ID recovery, and contrast SSE with WebSockets.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/sse_recovery.tsx`](starter/sse_recovery.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l02/m04l02-02/starter`
2. Read `sse_recovery.tsx`.
3. Run it: `tsx sse_recovery.tsx`.
4. Check it from the repository root: `./check m04l02-02`.

## Expected output

```text
Recovered count: 2
First recovered event: Payment Confirmed
Last recovered event: Dispatched
```

## How to check

`./check m04l02-02` copies `starter/` into a scratch directory and runs `tsx sse_recovery.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/fullstack-course/m04l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
