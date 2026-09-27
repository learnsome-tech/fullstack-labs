# Exercises — Asynchronous Event Processing: Outbox Pattern & Queues

Lesson `m04l05` · [Watch](https://learnsome.tech/courses/fullstack-course/watch?lesson=m04l05)

## Exercise 1: Engineer an Outbox Pattern Relay and Idempotent Handler

1. Commit business entity changes and outbox event rows in one transaction.
2. Create an asynchronous relay worker polling pending outbox messages.
3. Publish outbox messages to message brokers with at-least-once delivery.
4. Implement an idempotent event consumer tracking processed message IDs.

> **Hint**: Use unique constraint on eventId in consumer database to enforce idempotency.


---

© LearnSome.tech · support@iwantto.learnsome.tech
