<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  modelValue: string | null | undefined;
  error?: boolean;
}>();

const emit = defineEmits<(e: "update:modelValue", value: string | null | undefined) => void>();

const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>

<template>
  <div class="form-field" :class="{ 'form-field_error': props.error }">
    <input
      :type="props.type"
      :name="props.name"
      :placeholder="props.placeholder"
      :required="props.required"
      v-model="localValue"
    />
  </div>
</template>

<style scoped>
.form-field input {
  width: 100%;
  box-sizing: border-box;
  padding: 0 var(--spacing-1);
  border: 1px solid var(--color-border-main);
  border-radius: 0.25rem;
  height: 2.5rem;
}

.form-field input:focus {
  outline: none;
  border: 1px solid var(--color-border-secondary);
}

.form-field_error input {
  border: 1px solid var(--color-alert);
  color: var(--color-alert);
}
</style>
