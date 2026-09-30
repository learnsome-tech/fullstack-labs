# m05l01-02 · Traceparent Engine

**Lesson:** [Distributed Tracing: OpenTelemetry & Traceparent](https://learnsome.tech/learn/fullstack-course/m05l01) (lesson 5.1, module 5: Distributed Observability & Resilience) · Pro  
**Check:** Graded

## Goal

You can implement distributed tracing using OpenTelemetry standards, propagate W3C traceparent headers across network boundaries, and stitch full-stack request spans.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/traceparent_engine.tsx`](starter/traceparent_engine.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m05l01/m05l01-02/starter`
2. Read `traceparent_engine.tsx`.
3. Run it: `tsx traceparent_engine.tsx`.
4. Check it from the repository root: `./check m05l01-02`.

## Expected output

```text
Root span identifier: 00f067aa0ba902b7
Child matches trace: true
Child unique span: true
Child span identifier: child-span-001
```

## How to check

`./check m05l01-02` copies `starter/` into a scratch directory and runs `tsx traceparent_engine.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/fullstack-course/m05l01) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
