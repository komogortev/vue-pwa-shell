# STATE.md — pwa-shell

## Status

_Last updated: 2026-03-28_

**What's working:** Full Phase 1 shell scaffold: routing, module mounting, Pinia store, PlatformAdapter interface, main menu, settings page. All forks (`threejs-engine-dev`, `three-dreams`) are current with this template.

**What's broken / incomplete:** `@base/pwa-core` SW registration is a stub. Not a concern for this template — forks implement when needed.

## Active Work

- No active work. Template is stable.

## Blockers & Open Questions

_None currently._

## Next Session

> Only open this project if a cross-cutting shell concern surfaces across forks (e.g., a new shell route pattern, a ModuleMount.vue change, or a PlatformAdapter interface update). Treat any shell change as potentially requiring propagation to all active forks.

## Decision Log

<!-- Append-only. One line per decision, newest first. -->

- **2026-03-22** — Phase 1 complete. Template frozen at scaffold state. Game-specific patterns live in forks only.

## Deferred

- **`@base/pwa-core` full integration:** SW registration composable not wired. Deferred to Phase 4 when a game fork needs offline support.
- **Electron main process template:** No `electron/` directory in template. Added per-fork in Phase 5.
