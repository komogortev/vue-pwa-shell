import { BaseModule } from '@base/engine-core'
import type { ShellContext } from '@base/engine-core'

/**
 * Minimal placeholder module used to validate the shell's mounting wiring
 * before a real engine module (e.g. ThreeModule) is available.
 * Replace with the real engine module in Phase 2.
 */
export class MockModule extends BaseModule {
  readonly id = 'mock-module'

  protected async onMount(container: HTMLElement, _context: ShellContext): Promise<void> {
    const el = document.createElement('div')
    el.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:1rem;'
    el.innerHTML = `
      <div style="font-family:monospace;font-size:1.5rem;color:#a5b4fc;">MockModule</div>
      <div style="font-family:monospace;font-size:0.875rem;color:#6b7280;">engine slot is ready — Phase 2 will mount ThreeModule here</div>
    `
    container.appendChild(el)
    this.emit('mock:ready')
  }

  protected async onUnmount(): Promise<void> {
    // container is cleared by the shell unmounting the DOM node
  }
}
