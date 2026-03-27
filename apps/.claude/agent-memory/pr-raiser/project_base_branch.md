---
name: Base branch convention
description: The project's default PR base branch is main (confirmed via gh pr create against nachappapr/e-commerce-app)
type: project
---

The default base branch for all PRs in this repo is `main`.

**Why:** Confirmed when raising PR #1 against `nachappapr/e-commerce-app` — `origin/HEAD` points to `main`.

**How to apply:** Always use `--base main` with `gh pr create` unless the user explicitly specifies a different target branch.
