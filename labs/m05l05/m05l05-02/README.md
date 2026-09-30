# m05l05-02 · Sigterm Drain

**Lesson:** [Health Probes & Graceful Shutdown: Kubernetes Lifecycles](https://learnsome.tech/learn/fullstack-course/m05l05) (lesson 5.5, module 5: Distributed Observability & Resilience) · Pro  
**Check:** Graded

## Goal

You can design Kubernetes health probes, separate liveness from readiness semantics, and implement staged graceful shutdown sequences to eliminate deployment downtime.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/sigterm_drain.tsx`](starter/sigterm_drain.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m05l05/m05l05-02/starter`
2. Read `sigterm_drain.tsx`.
3. Run it: `tsx sigterm_drain.tsx`.
4. Check it from the repository root: `./check m05l05-02`.

## Expected output

```text
Initial live: true
Initial ready: true
Shutdown ready: false
Remaining requests: 0
```

## How to check

`./check m05l05-02` copies `starter/` into a scratch directory and runs `tsx sigterm_drain.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/fullstack-course/m05l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
