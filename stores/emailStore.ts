import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { type Email, SEED_EMAILS } from '~/constants/emails'

export const useEmailStore = defineStore('email', () => {
  const emails = ref<Email[]>([])
  const selectedIds = ref(new Set<number>())
  const openEmailId = ref<number | null>(null)
  const inboxEmails = computed(() => emails.value.filter((e) => !e.isArchived))
  const archivedEmails = computed(() => emails.value.filter((e) => e.isArchived))
  const inboxCount = computed(() => inboxEmails.value.length)
  const archiveCount = computed(() => archivedEmails.value.length)
  const selectedCount = computed(() => selectedIds.value.size)
  const openEmail = computed(() => emails.value.find((e) => e.id === openEmailId.value) ?? null)

  function isAllSelected(ids: number[]) {
    if (ids.length === 0) return false
    return ids.every((id) => selectedIds.value.has(id))
  }

  function loadEmails() {
    emails.value = SEED_EMAILS.map((e) => ({ ...e }))
  }

  function toggleSelected(id: number) {
    if (selectedIds.value.has(id)) {
      selectedIds.value.delete(id)
    } else {
      selectedIds.value.add(id)
    }
  }

  function selectAll(ids: number[]) {
    for (const id of ids) {
      selectedIds.value.add(id)
    }
  }

  function deselectAll() {
    selectedIds.value.clear()
  }

  function markAsRead(ids: number[]) {
    for (const email of emails.value) {
      if (ids.includes(email.id)) {
        email.isRead = true
      }
    }
  }

  function archiveEmails(ids: number[]) {
    for (const email of emails.value) {
      if (ids.includes(email.id)) {
        email.isArchived = true
      }
    }
    deselectAll()
  }

  function unarchiveEmails(ids: number[]) {
    for (const email of emails.value) {
      if (ids.includes(email.id)) {
        email.isArchived = false
      }
    }
    deselectAll()
  }

  function openEmailAction(id: number) {
    openEmailId.value = id
  }

  function closeEmail() {
    openEmailId.value = null
  }

  function markSelectedAsRead() {
    markAsRead([...selectedIds.value])
  }

  function archiveSelected() {
    archiveEmails([...selectedIds.value])
  }

  function unarchiveSelected() {
    unarchiveEmails([...selectedIds.value])
  }

  return {
    emails,
    selectedIds,
    openEmailId,
    inboxEmails,
    archivedEmails,
    inboxCount,
    archiveCount,
    selectedCount,
    openEmail,
    isAllSelected,
    loadEmails,
    toggleSelected,
    selectAll,
    deselectAll,
    markAsRead,
    archiveEmails,
    unarchiveEmails,
    openEmailAction,
    closeEmail,
    markSelectedAsRead,
    archiveSelected,
    unarchiveSelected,
  }
})
