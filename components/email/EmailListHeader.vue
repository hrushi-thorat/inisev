<script setup lang="ts">
import type { Email } from '~/constants/emails'
import { useEmailStore } from '~/stores/emailStore'
import AppCheckbox from '../common/AppCheckbox.vue'

const props = defineProps<{
  emails: Email[]
  isArchive?: boolean
}>()

const store = useEmailStore()

const emailIds = computed(() => props.emails.map((e) => e.id))
const allSelected = computed(() => store.isAllSelected(emailIds.value))
const allSelectedRead = computed(() => {
  const ids = [...store.selectedIds]
  return ids.length > 0 && ids.every((id) => store.emails.find((e) => e.id === id)?.isRead)
})

function toggleAll(checked: boolean) {
  if (checked) {
    store.selectAll(emailIds.value)
  } else {
    store.deselectAll()
  }
}
</script>

<template>
  <div class="email-list-header">
    <div class="email-list-header__left">
      <AppCheckbox :model-value="allSelected" @update:model-value="toggleAll" />
      <span class="email-list-header__count">Email Selected ({{ store.selectedCount }})</span>
    </div>
    <div v-if="store.selectedCount > 0" class="email-list-header__actions">
      <button v-if="!allSelectedRead" class="email-list-header__action" @click="store.markSelectedAsRead()">
        <img src="/icons/mail-04.png" alt="" width="16" height="16" />
        Mark as read (r)
      </button>
      <button v-if="isArchive" class="email-list-header__action" @click="store.unarchiveSelected()">
        <img src="/icons/trash-01.png" alt="" width="16" height="16" />
        Unarchive (a)
      </button>
      <button v-else class="email-list-header__action" @click="store.archiveSelected()">
        <img src="/icons/trash-01.png" alt="" width="16" height="16" />
        Archive (a)
      </button>
    </div>
  </div>
</template>

<style scoped>
.email-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--gap-md) var(--gap-lg);
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-border);
}

.email-list-header__left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.email-list-header__count {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
}

.email-list-header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.email-list-header__action {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  border-radius: 4px;
}
</style>
