<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  modelValue: string | number | undefined;
}>();

const emit = defineEmits<(e: "update:modelValue", value: string | number | undefined) => void>();

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
  <div class="form-field">
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
  padding: 0 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  height: 2.5rem;
}

.form-field input:focus {
  outline: none;
  border: 1px solid var(--color-text);
}
</style>
