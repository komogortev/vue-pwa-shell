# vue-pwa-shell

A Vue 3 + TypeScript + Vite PWA starter for apps that host an engine module, such as a Three.js game. It
provides routing, a service worker, a Pinia store, and a mount/unmount contract for engine modules from
[`@base/engine-core`](https://github.com/komogortev/vue-three-base-packages). It contains no game logic. The
[threejs-engine-dev](https://github.com/komogortev/threejs-engine-dev) editor and
the `three-dreams` game started from this shell.

## What is in it

- **Routes:** menu, game and settings views (`vue-router`, lazy-loaded), with unknown paths redirecting to the menu.
- **Module mounting:** `ModuleMount.vue` mounts and unmounts any `EngineModule` into a container.
  `MockModule` is a placeholder that shows the engine slot is wired; replace it with a real module such as
  `ThreeModule` from `@base/threejs-engine`.
- **Shell store:** a Pinia store holding the active module and the locale.
- **Platform adapter:** a `PlatformAdapter` interface (storage, `openExternal`, optional Steam hooks) with a
  web implementation, so the same shell can target a desktop wrapper later. `pnpm build:electron` builds
  without the service worker; no Electron wrapper is included.
- **PWA:** `vite-plugin-pwa` generates the service worker and web manifest at build time.
- **Tailwind CSS** baseline.

## Run it

Needs Node 20 or newer and pnpm 9 or newer. The shell links `@base/engine-core` from a sibling checkout
(`"@base/engine-core": "link:../../SHARED/packages/engine-core"`), so arrange the folders like this:

```text
workspace/
  SHARED/        # github.com/komogortev/vue-three-base-packages
  BASE/
    pwa-shell/   # this repository
```

```bash
cd SHARED && pnpm install && pnpm build   # builds the @base/* packages
cd ../BASE/pwa-shell && pnpm install && pnpm dev
```

A clone of this repository on its own will not install until the `link:` path points at a checkout of the
packages repo, or at a published `@base/engine-core` version.

## Scripts

| Command | What it does |
|--------|--------------|
| `pnpm dev` | Vite dev server |
| `pnpm build` | Type-check (`vue-tsc -b`) and production build |
| `pnpm build:electron` | The same build without the service worker |
| `pnpm preview` | Preview the production build |

## Deploying to GitHub Pages

Pages is not configured. If you add it, set the Vite `base` to your project path (for example
`/vue-pwa-shell/`) and build `dist/` in CI, as [threejs-engine-dev](https://github.com/komogortev/threejs-engine-dev) does.

## Related repositories

- [vue-three-base-packages](https://github.com/komogortev/vue-three-base-packages): the `@base/*` libraries
- [threejs-engine-dev](https://github.com/komogortev/threejs-engine-dev): a Three.js scene editor built on this shell and those packages

## License

[MIT](./LICENSE).
