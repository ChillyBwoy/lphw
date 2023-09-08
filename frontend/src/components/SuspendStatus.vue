<script lang="ts" setup>
const props = defineProps<{
  status: "loading" | "error" | "success";
}>();

defineSlots<{
  loading: () => string;
  error: () => string;
  success: () => string;
}>();
</script>

<template>
  <slot name="loading" v-if="props.status === 'loading'"></slot>
  <slot name="error" v-if="props.status === 'error'"></slot>
  <slot name="success" v-if="props.status === 'success'"></slot>
</template>
