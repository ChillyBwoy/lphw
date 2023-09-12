<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    size?: "s" | "m" | "l" | "xl";
  }>(),
  {
    size: "m",
  },
);

const sizeClassName = computed(() => {
  switch (props.size) {
    case "s":
      return "icon-container_s";
    case "l":
      return "icon-container_l";
    case "xl":
      return "icon-container_xl";
    default:
      return "icon-container_m";
  }
});

const className = {
  "icon-container": true,
  [sizeClassName.value]: true,
};
</script>

<style scoped>
.icon-container {
  display: inline-block;
}

.icon-container_s {
  width: var(--icon-size-s);
  height: var(--icon-size-s);
}
.icon-container_m {
  width: var(--icon-size-m);
  height: var(--icon-size-m);
}
.icon-container_l {
  width: var(--icon-size-l);
  height: var(--icon-size-l);
}
.icon-container_xl {
  width: var(--icon-size-xl);
  height: var(--icon-size-xl);
}
</style>

<template>
  <span :class="className">
    <slot></slot>
  </span>
</template>
