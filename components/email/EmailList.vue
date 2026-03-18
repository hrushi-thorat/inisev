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
    <div class="email-list__items">
      <EmailListItem
        v-for="email in emails"
        :key="email.id"
        :email="email"
      />
    </div>
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
}
</style>
