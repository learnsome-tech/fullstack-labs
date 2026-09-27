# Exercises — Distributed Cache Invalidation: Redis & Tagged Purging

Lesson `m04l04` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m04l04)

## Exercise 1: Engineer a Tagged Cache Invalidator with Pub-Sub

1. Implement a two-tier cache with local in-memory L1 and shared Redis L2.
2. Associate cached responses with surrogate cache tags.
3. Purge tagged items selectively upon executing backend mutations.
4. Broadcast invalidation notifications across cluster nodes via pub-sub.

> **Hint**: Publish invalidation messages to a Redis channel subscribed by all workers.


---

© LearnSome.tech · support@iwantto.learnsome.tech
