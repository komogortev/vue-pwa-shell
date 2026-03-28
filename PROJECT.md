# PROJECT.md — pwa-shell

## Identity

- **Module:** `pwa-shell` (GitHub template — not an @base package)
- **Role:** The canonical Vue 3 + Vite + Tailwind shell template. All game experiences fork from this repo. Owns routing, PWA lifecycle, module mounting contract, and platform adapter interface. Never contains game logic.
- **Fork of:** N/A — this IS the template origin
- **Extracts to:** N/A — template stays here; reusable non-shell code goes to SHARED

## North Star

A clean, minimal shell that any developer can fork to immediately have a working @base game harness — routing, module mounting, platform adapter, and PWA lifecycle wired from day one.

## Current Milestone

**Stable template** — Phase 1 complete. Template is not actively modified except when a cross-cutting shell concern is identified across forks.

## V1 Scope

**In scope:**
- `src/main.ts` — app entry, Pinia + Vue Router setup
- `src/App.vue` — root component with module slot
- `src/router/index.ts` — shell routes (menu, game, settings)
- `src/stores/shell.ts` — Pinia shell store (currentModule, locale)
- `src/components/modules/ModuleMount.vue` — mounts/unmounts any `EngineModule`
- `src/composables/useShellContext.ts` — builds `ShellContext` from router + EventBus
- `src/platform/adapter.ts` — `PlatformAdapter` interface + web implementation
- `src/composables/usePlatformAdapter.ts` — detects web vs Electron at runtime
- Shell UI: main menu, settings page (Tailwind, dark theme)

**Out of scope for v1:**
- Any game logic, scene management, or engine code
- Electron main process (added per-fork when needed)
- `@base/pwa-core` full SW implementation (deferred to Phase 4)

## Stack (beyond base fork)

- Vue 3 + Vite + TypeScript: core framework
- Tailwind CSS: utility-first styling
- Pinia: shell state management
- Vue Router: client-side routing
- `@base/engine-core`: `EngineModule` mount contract, `EventBus`, `ShellContext`

## Architectural Decisions

<!-- Append-only. Date each entry. Never remove old decisions. -->

- **2026-03-22** — Shell never imports game-specific code. Engine modules are mounted dynamically via `ModuleMount.vue` and communicate only through `ShellContext.eventBus`.
- **2026-03-22** — `PlatformAdapter` interface abstracts web vs Electron. All shell-level IO goes through the adapter — never `localStorage` or `window.electronAPI` directly.
- **2026-03-22** — Template is a GitHub Template repo, not a Git submodule. Forks get a clean history. Updates propagate manually (fork owners cherry-pick shell changes as needed).
