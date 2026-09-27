#!/usr/bin/env bash
# Production Full-Stack Engineering — lesson m05l05 — Health Probes & Graceful Shutdown: Kubernetes Lifecycles
# https://learnsome.tech/courses/fullstack-course/watch?lesson=m05l05
# © LearnSome.tech
set -u
bun run sigterm_drain.tsx
