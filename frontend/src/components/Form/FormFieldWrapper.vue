<script lang="ts" setup>
import ExclamationCircleIcon from "@heroicons/vue/24/solid/ExclamationCircleIcon";

const props = defineProps<{
  title?: string;
  errors?: Array<{ message: string }>;
}>();
</script>

<template>
  <div class="form-field-wrapper" :class="{ 'form-field-wrapper_error': props.errors && props.errors.length > 0 }">
    <template v-if="props.title">
      <label class="form-field-wrapper__title">{{ props.title }}</label>
    </template>
    <div class="form-field-wrapper__body">
      <slot></slot>
      <ul v-if="props.errors && props.errors.length > 0" class="form-field-wrapper__errorlist">
        <li v-for="error in props.errors" :key="error.message" class="form-field-wrapper__errorlist__item">
          <ExclamationCircleIcon class="form-field-wrapper__errorlist__icon" />
          {{ error.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.form-field-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-field-wrapper_error {
  color: var(--color-alert);
}

.form-field-wrapper__title {
  font-size: var(--font-size-l);
  font-weight: 500;
}

.form-field-wrapper__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.form-field-wrapper__errorlist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.form-field-wrapper__errorlist__item {
  font-size: var(--font-size-s);
  color: var(--color-alert);
  display: flex;
  gap: var(--spacing-05);
}

.form-field-wrapper__errorlist__icon {
  width: var(--icon-size-m);
  height: var(--icon-size-m);
}
</style>
