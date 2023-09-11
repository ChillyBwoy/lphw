<script lang="ts" setup>
const props = defineProps<{
  status: "idle" | "loading" | "error" | "success";
}>();

defineSlots<{
  idle: () => string;
  loading: () => string;
  error: () => string;
  success: () => string;
}>();
</script>

<template>
  <slot name="idle" v-if="props.status === 'idle'"></slot>
  <slot name="loading" v-if="props.status === 'loading'"></slot>
  <slot name="error" v-if="props.status === 'error'"></slot>
  <slot name="success" v-if="props.status === 'success'"></slot>
</template>
