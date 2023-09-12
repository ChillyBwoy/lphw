<script lang="ts" setup>
import { computed, ref } from "vue";
import { RobotStatus } from "@/client";
import FormSelect from "@/components/Form/FormSelect.vue";
import FormFieldWrapper from "@/components/Form/FormFieldWrapper.vue";
import FormButton from "@/components/Form/FormButton.vue";

export interface RobotSearchFormParams {
  systemStatus: RobotStatus;
  connected: string;
}

const props = defineProps<{
  modelValue: Partial<RobotSearchFormParams>;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", v: Partial<RobotSearchFormParams>): void;
}>();

const $systemStatus = ref(props.modelValue.systemStatus ?? undefined);
const $connected = ref(props.modelValue.connected ?? undefined);

const systemStatusChoices = computed(() => {
  const data = Object.entries(RobotStatus);
  return [["All", ""], ...data];
});

const connectedChoices = computed(
  () =>
    [
      ["All", ""],
      ["Connected", "true"],
      ["Disconnected", "false"],
    ] as const,
);

const handleSubmit = (event: Event) => {
  event.preventDefault();

  emit("update:modelValue", {
    systemStatus: $systemStatus.value,
    connected: $connected.value,
  });
};
</script>

<style scoped>
.robot-filter-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}
</style>

<template>
  <form class="robot-filter-form" @submit="handleSubmit">
    <FormFieldWrapper title="Status">
      <FormSelect name="system_status" v-model="$systemStatus">
        <option v-for="[key, value] in systemStatusChoices" :key="key" :value="value">{{ key }}</option>
      </FormSelect>
    </FormFieldWrapper>

    <FormFieldWrapper title="Connected">
      <FormSelect name="connected" v-model="$connected">
        <option v-for="[key, value] in connectedChoices" :key="key" :value="value">{{ key }}</option>
      </FormSelect>
    </FormFieldWrapper>

    <FormButton type="submit" fullWidth size="l">Search</FormButton>
  </form>
</template>
