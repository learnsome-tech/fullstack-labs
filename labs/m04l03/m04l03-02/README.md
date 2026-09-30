# m04l03-02 · Heartbeat Sweeper

**Lesson:** [Bidirectional WebSockets: Reconnection & Heartbeats](https://learnsome.tech/learn/fullstack-course/m04l03) (lesson 4.3, module 4: Realtime Comms & Data Synchronization) · Pro  
**Check:** Graded

## Goal

You can architect full-duplex WebSocket communications, detect half-open TCP connections with heartbeats, and implement jittered exponential backoff algorithms.

## Files

- [`starter/heartbeat_sweeper.tsx`](starter/heartbeat_sweeper.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l03/m04l03-02/starter`
2. Read `heartbeat_sweeper.tsx`.
3. Run it: `tsx heartbeat_sweeper.tsx`.
4. Check it from the repository root: `./check m04l03-02`.

## Expected output

```text
Pruned count: 1
Active count: 1
Second pruned: 0
```

## How to check

`./check m04l03-02` copies `starter/` into a scratch directory and runs `tsx heartbeat_sweeper.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/fullstack-course/m04l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
