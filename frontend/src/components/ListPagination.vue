<script lang="ts" setup>
import { computed, ref } from "vue";

import FormButton from "@/components/Form/FormButton.vue";

const props = defineProps<{
  pageSize: number;
  pages: number;
  offset: number;
  disabled?: boolean;
  modelValue: number;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", page: number): void;
}>();

const $page = ref(props.modelValue);

const pageRange = computed(() => {
  let start = Math.max($page.value - props.offset, 1);
  let end = Math.min($page.value + props.offset + 1, props.pages + 1);

  const result = [];

  for (let i = start; i < end; i++) {
    result.push(i);
  }

  return result;
});

const hasLeftEllipsis = computed(() => {
  return pageRange.value[0] > 1;
});

const hasRightEllipsis = computed(() => {
  return pageRange.value[pageRange.value.length - 1] < props.pages;
});

const handleClickPage = (page: number) => {
  emit("update:modelValue", page);
};

const handleClickPrev = () => {
  if ($page.value > 1) {
    emit("update:modelValue", $page.value - 1);
  }
};

const handleClickNext = () => {
  if ($page.value < props.pages) {
    emit("update:modelValue", $page.value + 1);
  }
};

const prevDisabled = computed(() => {
  if (props.disabled) {
    return true;
  }

  return $page.value <= 1;
});

const nextDisabled = computed(() => {
  if (props.disabled) {
    return true;
  }

  return $page.value >= props.pages;
});
</script>

<style scoped>
.list-pagination {
  display: flex;
  gap: var(--grid-gap-1);
}
.list-pagination ul {
  list-style: none;
  display: flex;
  gap: var(--grid-gap-1);
}

.list-pagination__page {
  width: 50px;
}
</style>

<template>
  <div class="list-pagination">
    <FormButton @click="handleClickPrev" :disabled="prevDisabled">prev</FormButton>
    <ul>
      <li v-if="hasLeftEllipsis">
        <FormButton class="list-pagination__page" disabled>...</FormButton>
      </li>
      <li v-for="pageNum in pageRange" :key="pageNum">
        <FormButton class="list-pagination__page" :active="pageNum === $page" @click="handleClickPage(pageNum)">{{
          pageNum
        }}</FormButton>
      </li>
      <li v-if="hasRightEllipsis">
        <FormButton class="list-pagination__page" disabled>...</FormButton>
      </li>
    </ul>
    <FormButton @click="handleClickNext" :disabled="nextDisabled">next</FormButton>
  </div>
</template>
