# m04l03 · Bidirectional WebSockets: Reconnection & Heartbeats

Module 4: Realtime Comms & Data Synchronization · lesson 4.3 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m04l03)

**Goal:** You can architect full-duplex WebSocket communications, detect half-open TCP connections with heartbeats, and implement jittered exponential backoff algorithms.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l03-02](m04l03-02/) | Heartbeat Sweeper | Graded |
| [m04l03-03](m04l03-03/) | Heartbeat Sweeper | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer a Resilient WebSocket Server and Client

1. Upgrade HTTP connections to full-duplex WebSocket sockets.
2. Implement an automated ping-pong heartbeat timer on the server.
3. Terminate unresponsive sockets to reclaim dangling file descriptors.
4. Code client-side reconnection logic with exponential backoff and jitter.

> **Hint:** Set isAlive = false before sending ping and restore to true on pong.

## Check yourself

- What network conditions cause a TCP socket connection to become half-open?
- How does the server ping-pong heartbeat protocol detect dead WebSocket clients?
- Why is adding random jitter essential when implementing exponential backoff reconnection?
- How can multiple WebSocket server instances broadcast messages to clients across a cluster?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
