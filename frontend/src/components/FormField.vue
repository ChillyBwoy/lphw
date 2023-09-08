<script lang="ts" setup>
const props = defineProps<{
  type: "string" | "number" | "boolean" | "text";
  name: string;
}>();
</script>

<template>
  <input v-if="props.type === 'string'" type="text" :name="props.name" />
  <input v-else-if="props.type === 'number'" type="number" :name="props.name" />
  <input v-else-if="props.type === 'boolean'" type="checkbox" :name="props.name" />
</template>
