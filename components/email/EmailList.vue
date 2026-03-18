<script setup lang="ts">
import type { Email } from '~/constants/emails'

defineProps<{
  emails: Email[]
  isArchive?: boolean
}>()
</script>

<template>
  <div class="email-list">
    <EmailListHeader :emails="emails" :is-archive="isArchive" />
    <TransitionGroup name="list" tag="div" class="email-list__items">
      <EmailListItem
        v-for="email in emails"
        :key="email.id"
        :email="email"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.email-list {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.email-list__items {
  flex: 1;
  overflow-y: auto;
  position: relative;
}

.list-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-move {
  transition: transform 0.3s ease;
}
</style>
