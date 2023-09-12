<script lang="ts" setup>
import { computed, ref } from "vue";

import FormButton from "@/components/Form/FormButton.vue";
import ChevronDoubleLeftIcon from "@heroicons/vue/24/solid/ChevronDoubleLeftIcon";
import ChevronDoubleRightIcon from "@heroicons/vue/24/solid/ChevronDoubleRightIcon";
import IconContainer from "@/components/IconContainer.vue";

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

const hasGoToFirstButton = computed(() => {
  return pageRange.value[0] > 1;
});

const hasGoToLastButton = computed(() => {
  return pageRange.value[pageRange.value.length - 1] < props.pages;
});

const handleClickPage = (page: number) => {
  emit("update:modelValue", page);
};
</script>

<style scoped>
.list-pagination {
  display: flex;
  gap: var(--spacing-1);
}
.list-pagination ul {
  list-style: none;
  display: flex;
  gap: var(--spacing-1);
}
</style>

<template>
  <div class="list-pagination">
    <ul>
      <li v-if="hasGoToFirstButton">
        <FormButton size="l" @click="handleClickPage(1)">
          <IconContainer>
            <ChevronDoubleLeftIcon />
          </IconContainer>
        </FormButton>
      </li>
      <li v-for="pageNum in pageRange" :key="pageNum">
        <FormButton size="l" :color="pageNum === $page ? 'secondary' : 'primary'" @click="handleClickPage(pageNum)">{{
          pageNum
        }}</FormButton>
      </li>
      <li v-if="hasGoToLastButton">
        <FormButton size="l" @click="handleClickPage(props.pages)">
          <IconContainer>
            <ChevronDoubleRightIcon />
          </IconContainer>
        </FormButton>
      </li>
    </ul>
  </div>
</template>
