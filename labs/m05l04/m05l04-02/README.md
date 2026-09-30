# m05l04-02 · Rate Limiter

**Lesson:** [Traffic Management: Sliding Window Rate Limiting](https://learnsome.tech/learn/fullstack-course/m05l04) (lesson 5.4, module 5: Distributed Observability & Resilience) · Pro  
**Check:** Graded

## Goal

You can design sliding window counter rate limiters, mitigate boundary burst vulnerabilities with linear interpolation, and enforce standard HTTP 429 throttling headers.

## Files

- [`starter/rate_limiter.tsx`](starter/rate_limiter.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m05l04/m05l04-02/starter`
2. Read `rate_limiter.tsx`.
3. Run it: `tsx rate_limiter.tsx`.
4. Check it from the repository root: `./check m05l04-02`.

## Expected output

```text
First request allowed: true
Remaining capacity: 1
Second request allowed: true
Third request rejected: true
```

## How to check

`./check m05l04-02` copies `starter/` into a scratch directory and runs `tsx rate_limiter.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/fullstack-course/m05l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
