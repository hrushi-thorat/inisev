<script setup lang="ts">
import { useEmailStore } from '~/stores/emailStore'
import { NAV_ITEMS } from '~/constants/navigation'

const store = useEmailStore()
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <img src="/logo.png" alt="Logo" />
    </div>
    <nav class="sidebar__nav">
      <SidebarNavItem
        v-for="item in NAV_ITEMS"
        :key="item.to"
        :to="item.to"
        :label="item.label"
        :icon="item.icon"
        :count="store[item.countKey]"
      />
    </nav>
    <div class="sidebar__logout">
      <button class="sidebar__logout-btn"> <img src="/icons/log-out-04.png" alt="logout" />Logout</button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: var(--sidebar-width);
  background-color: var(--color-primary-light);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px 0px;
  align-items: flex-start;
}

.sidebar__logo {
  margin-left: 24px;
  height: 20px;
  width: 40px;
  flex-shrink: 0;
}

.sidebar__logo img {
    height: 100%;
    width: 100%;
    object-fit: contain;

}

.sidebar__nav {
  padding: 32px 10px 0px 10px;
  flex: 1;
  width: 100%;
}

.sidebar__logout {
  padding-left: 24px;
}

.sidebar__logout-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  color: var(--color-text-secondary);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  
}
</style>
