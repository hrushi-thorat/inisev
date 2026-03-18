<script setup lang="ts">
const checked = defineModel<boolean>()
</script>

<template>
  <label class="checkbox" @click.stop>
    <input
      type="checkbox"
      class="checkbox__input"
      v-model="checked"
    />
    <span class="checkbox__box">
      <svg v-if="checked" class="checkbox__icon" viewBox="0 0 12 10" fill="none">
        <path d="M1 5L4.5 8.5L11 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </label>
</template>

<style scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox__box {
  width: 20px;
  height: 20px;
  border: 1px solid #CAD6e4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s, border-color 0.15s;
}

.checkbox__input:checked + .checkbox__box {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.checkbox__icon {
  width: 12px;
  height: 10px;
}
</style>
