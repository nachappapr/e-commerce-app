Review the latest git changes and write a commit message that follows this project's conventions.

## Steps

1. Run `git diff --staged` to see staged changes. If nothing is staged, run `git diff HEAD` to see unstaged changes and `git status` to see untracked files.
2. Identify the nature of the changes (new feature, bug fix, refactor, config, etc.).
3. Determine the affected scope (e.g. `user-service`, `prisma`, `ui`, `eslint-config`).
4. Write a commit message following the Conventional Commits format used in this repo.

## Commit Message Format

```
type(scope): short description

Optional body explaining the why, not the what.
```

**Types:**
- `feat` — new feature
- `fix` — bug fix
- `refactor` — code change that neither fixes a bug nor adds a feature
- `chore` — build process, tooling, config changes
- `docs` — documentation only
- `test` — adding or updating tests
- `perf` — performance improvement

**Rules:**
- Subject line: lowercase, no period at the end, max 72 chars
- Use imperative mood: "add field" not "added field"
- Scope should match the app/package name (e.g. `user-service`, `ui`, `prisma`)
- Keep the body focused on *why*, not *what* — the diff already shows what changed

## Example

```
feat(user-service): add User, Address, and Account models to prisma schema

Supports email/password and OAuth authentication, three user roles
(CUSTOMER, ADMIN, VENDOR), and saved addresses with cascade deletes.
```

Once you've drafted the message, show it to me for confirmation before running `git commit`.
