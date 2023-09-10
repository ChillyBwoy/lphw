<script lang="ts" setup>
const props = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="form-field-wrapper">
    <template v-if="props.title">
      <label class="form-field-wrapper__title">{{ props.title }}</label>
    </template>
    <div class="form-field-wrapper__body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.form-field-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-field-wrapper__title {
  font-size: 0.8rem;
}

.form-field-wrapper__body {
}
</style>
