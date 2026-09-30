# m04l04 · Distributed Cache Invalidation: Redis & Tagged Purging

Module 4: Realtime Comms & Data Synchronization · lesson 4.4 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m04l04)

**Goal:** You can design two-tier distributed caching architectures, implement surrogate cache tags for fine-grained invalidation, and synchronize in-memory caches using Redis pub-sub.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l04-02](m04l04-02/) | Tagged Cache Purge | Graded |
| [m04l04-03](m04l04-03/) | Tagged Cache Purge | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer a Tagged Cache Invalidator with Pub-Sub

1. Implement a two-tier cache with local in-memory L1 and shared Redis L2.
2. Associate cached responses with surrogate cache tags.
3. Purge tagged items selectively upon executing backend mutations.
4. Broadcast invalidation notifications across cluster nodes via pub-sub.

> **Hint:** Publish invalidation messages to a Redis channel subscribed by all workers.

## Check yourself

- What latency advantages does an L1 in-memory cache offer over a remote Redis tier?
- How do surrogate cache tags prevent the need to purge entire cache stores on update?
- Why must multi-node clusters use Redis pub-sub to coordinate local memory invalidation?
- What is a cache stampede or thundering herd, and how does singleflight mutex mitigate it?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
