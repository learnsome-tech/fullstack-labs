#!/usr/bin/env bash
# Production Full-Stack Engineering — lesson m06l04 — Continuous Delivery: Blue-Green & Canary Pipelines
# https://learnsome.tech/courses/fullstack-course/watch?lesson=m06l04
# © LearnSome.tech
set -u
bun run canary_stepper.tsx
