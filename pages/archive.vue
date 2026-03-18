<script setup lang="ts">
import { useEmailStore } from '~/stores/emailStore'

const store = useEmailStore()
</script>

<template>
  <EmailList :emails="store.archivedEmails" is-archive />
</template>
