# m04l02 · Server-Sent Events: Streaming Updates & Recovery

Module 4: Realtime Comms & Data Synchronization · lesson 4.2 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m04l02)

**Goal:** You can design unidirectional streaming architectures with Server-Sent Events, format SSE protocol frames, manage Last-Event-ID recovery, and contrast SSE with WebSockets.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l02-02](m04l02-02/) | Sse Recovery | Graded |
| [m04l02-03](m04l02-03/) | Sse Frame Formatter | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer an SSE Stream Endpoint with Replay Buffers

1. Format HTTP response headers for text event-stream with keep-alive.
2. Serialize events into standard SSE frames separated by double newlines.
3. Parse the Last-Event-ID header to resume disconnected client streams.
4. Transmit periodic comment frames as heartbeats to prevent proxy timeouts.

> **Hint:** Set Content-Type: text/event-stream and flush headers immediately.

## Check yourself

- Why are Server-Sent Events simpler to operate than WebSockets for unidirectional streaming?
- How does the browser EventSource API utilize the Last-Event-ID header during reconnection?
- What purpose do periodic comment frames (lines starting with a colon) serve in SSE?
- What HTTP response headers are mandatory when initiating a Server-Sent Events stream?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
