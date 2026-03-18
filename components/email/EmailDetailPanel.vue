<script setup lang="ts">
import { useEmailStore } from '~/stores/emailStore'

const store = useEmailStore()

function handleClickOutside(event: MouseEvent) {
  const panel = (event.currentTarget as HTMLElement)
  if (event.target === panel) {
    store.closeEmail()
  }
}
</script>

<template>
  <div class="email-detail-overlay" @click="handleClickOutside">
    <aside class="email-detail">
      <div class="email-detail__header">
        <a class="email-detail__close" @click="store.closeEmail()">Close (Esc)</a>
        <div class="email-detail__actions">
          <button v-if="!store.openEmail?.isRead" class="email-detail__action" @click="store.markAsRead([store.openEmail!.id]); store.closeEmail()">
            <img src="/icons/mail-04.png" alt="" width="16" height="16" />
            Mark as read (r)
          </button>
          <button v-if="store.openEmail?.isArchived" class="email-detail__action" @click="store.unarchiveEmails([store.openEmail!.id]); store.closeEmail()">
            <img src="/icons/trash-01.png" alt="" width="16" height="16" />
            Unarchive (a)
          </button>
          <button v-else class="email-detail__action" @click="store.archiveEmails([store.openEmail!.id]); store.closeEmail()">
            <img src="/icons/trash-01.png" alt="" width="16" height="16" />
            Archive (a)
          </button>
        </div>
      </div>
      <div class="email-detail__content">
        <h3 class="email-detail__subject">{{ store.openEmail?.subject }}</h3>
        <p class="email-detail__body">{{ store.openEmail?.body }}</p>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.email-detail-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(76, 87, 100, 0.8);
}

.email-detail {
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid var(--color-border);
  background-color: var(--color-bg);
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  height: 100vh;
  width: 752px;
}

.email-detail__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.email-detail__close {
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  cursor: pointer;
  text-decoration: none;
}

.email-detail__close:hover {
  text-decoration: underline;
}

.email-detail__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.email-detail__action {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  padding: 4px 8px;
  border-radius: 4px;
}

.email-detail__action:hover {
  background-color: var(--color-hover);
}

.email-detail__content {
  flex: 1;
  overflow-y: auto;
}

.email-detail__subject {
  font-size: 20px;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 20px;
}

.email-detail__body {
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
}
</style>

<style>
.slide-panel-enter-active,
.slide-panel-leave-active {
  transition: opacity 0.3s ease;
}

.slide-panel-enter-from,
.slide-panel-leave-to {
  opacity: 0;
}

.slide-panel-enter-active .email-detail,
.slide-panel-leave-active .email-detail {
  transition: transform 0.3s ease;
}

.slide-panel-enter-from .email-detail,
.slide-panel-leave-to .email-detail {
  transform: translateX(100%);
}
</style>
