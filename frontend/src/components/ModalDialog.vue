<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import FormButton from "@/components/Form/FormButton.vue";
import IconContainer from "@/components/IconContainer.vue";
import XMarkIcon from "@heroicons/vue/24/outline/XMarkIcon";

const props = defineProps<{
  modelValue: boolean;
}>();

const $open = ref(props.modelValue);

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const dialog = ref<HTMLDialogElement | null>(null);

watch(
  () => props.modelValue,
  (open) => {
    if (open) {
      dialog.value?.showModal();
    } else {
      dialog.value?.close();
    }
  },
);

onMounted(() => {
  if ($open.value) {
    dialog.value?.showModal();
  }
});

const handleCloseButtonClick = () => {
  emit("update:modelValue", false);
};
</script>

<style scoped>
.modal-dialog {
  border: none;
  outline: none;
  border-radius: var(--border-radius-2);
  padding: var(--spacing-2);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
}
.modal-dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal-dialog header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-dialog main {
  padding: var(--spacing-2) 0;
}

.modal-dialog__title {
  font-size: var(--font-size-l);
  font-weight: 600;
}

.modal-dialog__actions {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: var(--spacing-2);
}
</style>

<template>
  <dialog class="modal-dialog" ref="dialog">
    <header>
      <h2 class="modal-dialog__title">
        <slot name="title"></slot>
      </h2>
      <FormButton color="transparent" @click="handleCloseButtonClick">
        <IconContainer size="l">
          <XMarkIcon />
        </IconContainer>
      </FormButton>
    </header>
    <main>
      <slot></slot>
    </main>
    <div class="modal-dialog__actions">
      <slot name="actions"></slot>
    </div>
  </dialog>
</template>
