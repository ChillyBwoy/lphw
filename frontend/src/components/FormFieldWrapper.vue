<script lang="ts" setup>
const props = defineProps<{
  label?: string;
}>();
</script>

<template>
  <div class="form-field">
    <template v-if="props.label">
      <label class="form-field__label">{{ props.label }}</label>
    </template>
    <label class="form-field__label">
      <slot></slot>
    </label>
  </div>
</template>

<style scoped>
.form-field {
}

.form-field__label {
}
</style>
