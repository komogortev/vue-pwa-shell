# vue-pwa-shell

**Vue 3 + Vite + PWA** application shell used as a **template** for `@base` ecosystem apps: Vue Router, Pinia, Tailwind, and [`@base/engine-core`](https://github.com/komogortev/vue-three-base-packages) for modular engine hosting (`ThreeModule`, child modules, `EventBus`).

**Public repository:** [github.com/komogortev/vue-pwa-shell](https://github.com/komogortev/vue-pwa-shell)

---

## What this template provides

- Vite 6 + `vite-plugin-pwa` (manifest, service worker registration)  
- Vue 3 + `vue-router` + Pinia  
- Tailwind CSS baseline  
- Dependency on **`@base/engine-core`** for shell/module lifecycle  

Use it as a **GitHub template** or fork when starting a new PWA that mounts engine children (e.g. `@base/threejs-engine`).

---

## Repository layout (important)

`package.json` currently resolves **`@base/engine-core`** with:

```json
"@base/engine-core": "link:../../SHARED/packages/engine-core"
```

That assumes this folder layout **on your machine**:

```text
your-projects/
  SHARED/                    # clone: github.com/komogortev/vue-three-base-packages
    packages/
      engine-core/
  BASE/
    pwa-shell/               # this template (vue-pwa-shell)
```

1. Clone **[vue-three-base-packages](https://github.com/komogortev/vue-three-base-packages)** and run `pnpm install && pnpm build` there.  
2. Clone or copy **vue-pwa-shell** under `BASE/pwa-shell` (or adjust the `link:` path to your layout).  
3. From `pwa-shell`: `pnpm install` → `pnpm dev`.

**Standalone clone** of *only* `vue-pwa-shell` (without `SHARED` beside it) will **not** satisfy `link:` until you either change the dependency to a **published** `@base/engine-core` version (GitHub Packages / npm) or clone the packages repo alongside this app.

---

## Scripts

| Command | Purpose |
|--------|---------|
| `pnpm dev` | Vite dev server |
| `pnpm build` | Production build + typecheck |
| `pnpm preview` | Preview production build |
| `pnpm typecheck` | `vue-tsc --noEmit` |
| `pnpm test` | Vitest |

---

## GitHub configuration

| Concern | This template |
|--------|----------------|
| **GitHub Pages** | **Optional.** Not configured by default. If you add Pages, use a **Vite `base`** matching your project URL (e.g. `/vue-pwa-shell/`) and build `dist/` in CI—same pattern as [threejs-engine-dev](https://github.com/komogortev/threejs-engine-dev). |
| **GitHub Actions** | Add workflows as needed (lint, build, deploy). No workflow is required for the template itself. |

---

## Related repositories

- **[vue-three-base-packages](https://github.com/komogortev/vue-three-base-packages)** — `@base/*` shared libraries  
- **[threejs-engine-dev](https://github.com/komogortev/threejs-engine-dev)** — Three.js editor/scene harness built on the same stack  

---

## License

As specified by the repository owner (add a `LICENSE` file for a public default).
