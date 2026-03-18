<script setup lang="ts">
import { useKeyboardShortcuts } from '~/composables/useKeyboardShortcuts'
import { useEmailStore } from '~/stores/emailStore'
import { NAV_ITEMS } from '~/constants/navigation'
import AppSidebar from '~/components/sidebar/AppSidebar.vue'

const route = useRoute()
const store = useEmailStore()
store.loadEmails()

useKeyboardShortcuts()

watch(() => route.path, () => {
  store.deselectAll()
  store.closeEmail()
})

const pageTitle = computed(() => {
  const item = NAV_ITEMS.find((nav) => route.path.startsWith(nav.to))
  return item?.label ?? ''
})
</script>

<template>
  <div class="app-layout">
    <AppSidebar />
    <main class="app-layout__main">
      <div class="app-layout__page-header">
          <h2>{{ pageTitle }}</h2>
      </div>
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

.app-layout__page-header{
  padding: 24px 24px 32px 24px;
}
.app-layout__page-header h2{
  font-weight: 500;
  font-size: 32px;
  color: var(--color-text);
}
</style>
