import { onMounted, onUnmounted } from 'vue'
import { useEmailStore } from '~/stores/emailStore'

export function useKeyboardShortcuts() {
  const store = useEmailStore()
  const route = useRoute()

  function getTargetIds(): number[] {
    if (store.selectedIds.size > 0) {
      return [...store.selectedIds]
    }
    if (store.openEmailId !== null) {
      return [store.openEmailId]
    }
    return []
  }

  function handleKeydown(event: KeyboardEvent) {
    const target = event.target as HTMLElement
    if (target instanceof HTMLTextAreaElement || (target instanceof HTMLInputElement && target.type !== 'checkbox')) {
      return
    }

    const ids = getTargetIds()
    if (ids.length === 0 && event.key !== 'Escape') return

    switch (event.key) {
      case 'r': {
        const hasUnread = store.emails.some((e) => ids.includes(e.id) && !e.isRead)
        if (hasUnread) store.markAsRead(ids)
        break
      }
      case 'a':
        if (route.path === '/archive') {
          store.unarchiveEmails(ids)
        } else {
          store.archiveEmails(ids)
        }
        break
      case 'Escape':
        store.closeEmail()
        break
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
}
