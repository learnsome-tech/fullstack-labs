# m02l04-02 · Problem Normalizer

**Lesson:** [Resilient Error Handling: Problem Details & Envelopes](https://learnsome.tech/learn/fullstack-course/m02l04) (lesson 2.4, module 2: API Contract Design & Type-Safe Comms) · Pro  
**Check:** Graded

## Goal

You can standardize full-stack error handling using RFC 9457 Problem Details, design resilient client-side error normalizers, and map server validation errors directly to UI forms.

## Files

- [`starter/problem_normalizer.tsx`](starter/problem_normalizer.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m02l04/m02l04-02/starter`
2. Read `problem_normalizer.tsx`.
3. Run it: `tsx problem_normalizer.tsx`.
4. Check it from the repository root: `./check m02l04-02`.

## Expected output

```text
Status code: 422
Field error: Invalid domain
Total field errors: 1
```

## How to check

`./check m02l04-02` copies `starter/` into a scratch directory and runs `tsx problem_normalizer.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/fullstack-course/m02l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
