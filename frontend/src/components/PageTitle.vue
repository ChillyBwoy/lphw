<script lang="ts" setup>
import { RouterLink } from "vue-router";
import ArrowLeftIcon from "@heroicons/vue/24/solid/ArrowLeftIcon";

const props = defineProps<{
  backUrl?: string;
}>();
</script>

<style scoped>
.page-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
}

.page-title__title {
  font-size: var(--font-size-xl);
  font-weight: 500;
  color: var(--color-text-primary);
}

.page-title__backurl {
  margin-left: calc(-1 * (var(--icon-size-xl) + var(--spacing-1)));
}
.page-title__backurl svg {
  width: var(--icon-size-xl);
  height: var(--icon-size-xl);
}

.page-title__content {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<template>
  <div class="page-title">
    <RouterLink v-if="props.backUrl" :to="props.backUrl" class="page-title__backurl">
      <ArrowLeftIcon />
    </RouterLink>
    <div class="page-title__content">
      <h1 class="page-title__title">
        <slot></slot>
      </h1>
      <div class="page-title__right">
        <slot name="side"></slot>
      </div>
    </div>
  </div>
</template>
