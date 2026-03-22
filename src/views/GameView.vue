<script setup lang="ts">
import { shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import ModuleMount from '@/components/modules/ModuleMount.vue'
import { MockModule } from '@/modules/MockModule'
import { useShellContext } from '@/composables/useShellContext'
import { useShellStore } from '@/stores/shell'

const router = useRouter()
const context = useShellContext()
const shell = useShellStore()

// shallowRef prevents Vue from making the module's internals reactive
const module = shallowRef(new MockModule())

shell.setActiveModule(module.value.id)
</script>

<template>
  <div class="relative w-screen h-screen bg-black overflow-hidden">
    <ModuleMount :module="module" :context="context" class="absolute inset-0" />

    <button
      class="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/70 text-white text-xs font-medium rounded-lg backdrop-blur-sm border border-white/10 transition-colors"
      @click="router.push('/')"
    >
      ← Menu
    </button>
  </div>
</template>
