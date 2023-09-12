<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
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
  width: 100%;
  box-sizing: border-box;
  padding: 0 var(--grid-gap-1);
  border: 1px solid var(--color-border-main);
  border-radius: 0.25rem;
  height: 2.5rem;
}
</style>

<template>
  <select class="form-select" v-model="localValue">
    <slot></slot>
  </select>
</template>
