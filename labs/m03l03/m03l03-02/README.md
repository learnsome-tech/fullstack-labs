# m03l03-02 · Token Rotation Engine

**Lesson:** [JWT Verification: Asymmetric Keys & Refresh Rotation](https://learnsome.tech/learn/fullstack-course/m03l03) (lesson 3.3, module 3: Authentication, Authorization & Identity) · Pro  
**Check:** Graded

## Goal

You can verify JSON Web Tokens using asymmetric public keys, implement refresh token rotation with reuse detection, and safeguard microservice ecosystems.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/token_rotation_engine.tsx`](starter/token_rotation_engine.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m03l03/m03l03-02/starter`
2. Read `token_rotation_engine.tsx`.
3. Run it: `tsx token_rotation_engine.tsx`.
4. Check it from the repository root: `./check m03l03-02`.

## Expected output

```text
First rotation success: true
Replay detected: true
Session killed: true
```

## How to check

`./check m03l03-02` copies `starter/` into a scratch directory and runs `tsx token_rotation_engine.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/fullstack-course/m03l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
