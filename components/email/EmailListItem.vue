<script setup lang="ts">
import type { Email } from '~/constants/emails'
import { useEmailStore } from '~/stores/emailStore'
import AppCheckbox from '../common/AppCheckbox.vue'

const props = defineProps<{
  email: Email
}>()

const store = useEmailStore()

const isSelected = computed(() => store.selectedIds.has(props.email.id))
</script>

<template>
  <div
    class="email-item"
    :class="{ 'email-item--read': email.isRead }"
    @click="store.openEmailAction(email.id)"
  >
    <AppCheckbox
      :model-value="isSelected"
      @update:model-value="store.toggleSelected(email.id)"
    />
    <span class="email-item__subject">{{ email.subject }}</span>
  </div>
</template>

<style scoped>
.email-item {
  display: flex;
  align-items: center;
  padding: 20px 24px;
  gap: 20px;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.2s ease;
}

.email-item:hover {
  background-color: #D1E2FF;
}

.email-item--read {
  opacity: 0.5;
}

.email-item__subject {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
}
.email-item:nth-child(odd)
{
    background-color: var(--color-hover);
}
</style>
