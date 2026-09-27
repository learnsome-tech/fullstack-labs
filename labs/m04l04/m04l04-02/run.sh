#!/usr/bin/env bash
# Production Full-Stack Engineering — lesson m04l04 — Distributed Cache Invalidation: Redis & Tagged Purging
# https://learnsome.tech/courses/fullstack-course/watch?lesson=m04l04
# © LearnSome.tech
set -u
bun run tagged_cache_purge.tsx
