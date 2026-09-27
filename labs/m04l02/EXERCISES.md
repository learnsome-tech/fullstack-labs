# Exercises — Server-Sent Events: Streaming Updates & Recovery

Lesson `m04l02` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m04l02)

## Exercise 1: Engineer an SSE Stream Endpoint with Replay Buffers

1. Format HTTP response headers for text event-stream with keep-alive.
2. Serialize events into standard SSE frames separated by double newlines.
3. Parse the Last-Event-ID header to resume disconnected client streams.
4. Transmit periodic comment frames as heartbeats to prevent proxy timeouts.

> **Hint**: Set Content-Type: text/event-stream and flush headers immediately.


---

© LearnSome.tech · support@iwantto.learnsome.tech
