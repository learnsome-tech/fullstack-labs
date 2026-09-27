#!/usr/bin/env bash
# Production Full-Stack Engineering — lesson m04l05 — Asynchronous Event Processing: Outbox Pattern & Queues
# https://learnsome.tech/courses/fullstack-course/watch?lesson=m04l05
# © LearnSome.tech
set -u
bun run idempotent_event_handler.tsx
