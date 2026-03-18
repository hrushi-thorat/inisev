<script setup lang="ts">
defineProps<{
  to: string
  label: string
  icon: string
  count: number
}>()
</script>

<template>
  <NuxtLink :to="to" class="nav-item">
    <div class="nav-item__label-wrapper"><img :src="icon" :alt="`${label}-icon`" /><span class="nav-item__label">{{ label }}</span></div>
    <span class="nav-item__count">{{ count }}</span>
  </NuxtLink>
</template>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  color: var(--color-text);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  border-radius: 24px;
  transition: all 0.2s ease;
}
.nav-item:hover{
background-color: #e8eff9;
}
.nav-item.router-link-active {
  background-color: #D6E2FB;
}
.nav-item__label-wrapper{
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-item__count {
  color: #000000;
}
</style>
