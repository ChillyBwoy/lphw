<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  name: string;
  modelValue: string | null | undefined;
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

<style scoped>
.form-select {
  position: relative;
}

.form-select select {
  width: 100%;
  box-sizing: border-box;
  padding: 0 var(--spacing-1);
  border: 1px solid var(--color-border-primary);
  border-radius: 0.25rem;
  height: 2.5rem;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.form-select::before,
.form-select::after {
  --size: 0.4rem;
  content: "";
  position: absolute;
  right: 1rem;
  pointer-events: none;
}

.form-select::before {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-bottom: var(--size) solid black;
  top: 25%;
}

.form-select::after {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: var(--size) solid black;
  bottom: 25%;
}
</style>

<template>
  <div class="form-select">
    <select :name="props.name" v-model="localValue">
      <slot></slot>
    </select>
  </div>
</template>
