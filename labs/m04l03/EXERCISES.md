# Exercises — Bidirectional WebSockets: Reconnection & Heartbeats

Lesson `m04l03` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m04l03)

## Exercise 1: Engineer a Resilient WebSocket Server and Client

1. Upgrade HTTP connections to full-duplex WebSocket sockets.
2. Implement an automated ping-pong heartbeat timer on the server.
3. Terminate unresponsive sockets to reclaim dangling file descriptors.
4. Code client-side reconnection logic with exponential backoff and jitter.

> **Hint**: Set isAlive = false before sending ping and restore to true on pong.


---

© LearnSome.tech · support@iwantto.learnsome.tech
