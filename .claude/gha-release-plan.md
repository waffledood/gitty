# semantic-release + GitHub Actions Setup

Automated npm publishing on every merge to `main` via `semantic-release`.

## Files to Create

- `.github/workflows/release.yml` — GHA workflow triggered on push to main
- `.releaserc.json` — semantic-release plugin config
- `.npmrc` — connects NPM_TOKEN env var to npm registry auth

## Files to Modify

- `package.json` — add `publishConfig.access: "public"` + semantic-release devDependencies

## Steps

1. `npm install --save-dev semantic-release @semantic-release/commit-analyzer @semantic-release/release-notes-generator @semantic-release/npm @semantic-release/git @semantic-release/github`
2. Create `.github/workflows/release.yml`
3. Create `.releaserc.json`
4. Create `.npmrc`
5. Add `"publishConfig": { "access": "public" }` to `package.json`

## Manual Steps (after merging)

1. Add `NPM_TOKEN` to GitHub repo secrets (npmjs.com → Access Tokens → Automation type classic token)
2. Create baseline tag: `git tag v1.0.0 && git push origin v1.0.0`

## How Version Bumps Work

| Commit message                        | Bump  |
|---------------------------------------|-------|
| `fix: ...`                            | patch |
| `feat: ...`                           | minor |
| `feat!: ...` or `BREAKING CHANGE:` in body | major |
