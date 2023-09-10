<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  type: string;
  name: string;
  placeholder?: string;
  modelValue: string | number | boolean | undefined;
}>();

const emit = defineEmits<(e: "update:modelValue", value: string | number | boolean | undefined) => void>();

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
    <input type="text" :name="props.name" :placeholder="props.placeholder" v-model="localValue" />
  </div>
</template>

<style scoped>
.form-field {
}

.form-field input {
  width: 100%;
  padding: 0 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  height: 2.5rem;
  font-size: 0.8rem;
}

.form-field input:focus {
  outline: none;
  border: 1px solid var(--color-text);
}
</style>
