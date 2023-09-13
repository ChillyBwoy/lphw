<script lang="ts" setup>
import { computed, ref } from "vue";
import { RobotStatus } from "@/client";
import FormSelect from "@/components/Form/FormSelect.vue";
import FormFieldWrapper from "@/components/Form/FormFieldWrapper.vue";
import FormButton from "@/components/Form/FormButton.vue";

export interface RobotSearchFormParams {
  systemStatus: RobotStatus;
  connected: string;
  orderBy: string;
  orderDirection: string;
}

const props = defineProps<{
  modelValue: Partial<RobotSearchFormParams>;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", v: Partial<RobotSearchFormParams>): void;
}>();

const $systemStatus = ref(props.modelValue.systemStatus ?? undefined);
const $connected = ref(props.modelValue.connected ?? undefined);
const $orderBy = ref(props.modelValue.orderBy ?? undefined);
const $orderDirection = ref(props.modelValue.orderDirection ?? undefined);

const systemStatusChoices = computed(() => {
  const data = Object.entries(RobotStatus);
  return [["", ""], ...data];
});

const connectedChoices = computed(
  () =>
    [
      ["", ""],
      ["Connected", "true"],
      ["Disconnected", "false"],
    ] as const,
);

const orderByChoices = computed(
  () =>
    [
      ["", ""],
      ["Name", "name"],
      ["Status", "system_status"],
      ["Connected", "connected"],
    ] as const,
);

const orderDirectionChoices = computed(
  () =>
    [
      ["", ""],
      ["Ascending", "asc"],
      ["Descending", "desc"],
    ] as const,
);

const handleSubmit = (event: Event) => {
  event.preventDefault();

  emit("update:modelValue", {
    systemStatus: $systemStatus.value,
    connected: $connected.value,
    orderBy: $orderBy.value,
    orderDirection: $orderDirection.value,
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

    <FormFieldWrapper title="Sort">
      <FormSelect name="order_by" v-model="$orderBy">
        <option v-for="[key, value] in orderByChoices" :key="key" :value="value">{{ key }}</option>
      </FormSelect>
    </FormFieldWrapper>

    <FormFieldWrapper title="Sort direction">
      <FormSelect name="order_direction" v-model="$orderDirection">
        <option v-for="[key, value] in orderDirectionChoices" :key="key" :value="value">{{ key }}</option>
      </FormSelect>
    </FormFieldWrapper>

    <FormButton type="submit" fullWidth size="l">Search</FormButton>
  </form>
</template>
