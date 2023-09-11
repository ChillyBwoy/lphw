<script lang="ts" setup>
const props = defineProps<{
  title?: string;
  errors?: Array<{ message: string }>;
}>();
</script>

<template>
  <div class="form-field-wrapper">
    <template v-if="props.title">
      <label class="form-field-wrapper__title">{{ props.title }}</label>
    </template>
    <div class="form-field-wrapper__body">
      <slot></slot>
      <ul v-if="props.errors && props.errors.length > 0" class="form-field-wrapper__errorlist">
        <li v-for="error in props.errors" :key="error.message" class="form-field-wrapper__errorlist__item">
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
  gap: 2px;
}

.form-field-wrapper__title {
}

.form-field-wrapper__body {
}

.form-field-wrapper__errorlist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.form-field-wrapper__errorlist__item {
  color: red;
}
</style>
