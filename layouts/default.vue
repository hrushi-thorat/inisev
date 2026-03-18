<script setup lang="ts">
import { useKeyboardShortcuts } from '~/composables/useKeyboardShortcuts'
import { useEmailStore } from '~/stores/emailStore'
import AppSidebar from '~/components/sidebar/AppSidebar.vue'

const store = useEmailStore()
store.loadEmails()

useKeyboardShortcuts()
</script>

<template>
  <div class="app-layout">
    <AppSidebar />
    <main class="app-layout__main">
      <slot />
    </main>
    <EmailDetailPanel v-if="store.openEmail" />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
  background-color: var(--color-bg);
}

.app-layout__main {
  flex: 1;
  overflow: hidden;
}
</style>
