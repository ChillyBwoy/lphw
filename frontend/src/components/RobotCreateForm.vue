<script lang="ts" setup>
import { ref } from "vue";
import { RobotStatus, type RobotCreate } from "@/client";
import FormField from "@/components/Form/FormField.vue";
import FormFieldWrapper from "@/components/Form/FormFieldWrapper.vue";
import FormButton from "@/components/Form/FormButton.vue";
import FormSelect from "@/components/Form/FormSelect.vue";

type RobotCreateErrors = Partial<Record<keyof RobotCreate, Array<{ type: string; message: string }>>>;

const props = defineProps<{
  errors?: RobotCreateErrors;
}>();

const $name = ref("");
const $model = ref("");
const $serial_number = ref("");
const $software_version = ref("");
const $ip_address = ref("");
const $system_status = ref(RobotStatus.IDLE);

const emit = defineEmits<{
  (e: "submit", robot: RobotCreate): void;
}>();

const handleSubmit = (event: Event) => {
  event.preventDefault();
  emit("submit", {
    name: $name.value,
    model: $model.value,
    serial_number: $serial_number.value,
    software_version: $software_version.value,
    ip_address: $ip_address.value,
    system_status: $system_status.value,
  });
};
</script>

<template>
  <form action="" @submit="handleSubmit" class="robot-create-form">
    <FormFieldWrapper title="Name" :errors="props.errors?.name">
      <FormField
        name="name"
        type="text"
        placeholder="Robot Name"
        v-model="$name"
        :error="Boolean(props.errors?.name)"
      />
    </FormFieldWrapper>
    <FormFieldWrapper title="Model" :errors="props.errors?.model">
      <FormField name="model" type="text" placeholder="" v-model="$model" />
    </FormFieldWrapper>
    <FormFieldWrapper title="Serial Number" :errors="props.errors?.serial_number">
      <FormField name="serial_number" type="text" placeholder="" v-model="$serial_number" />
    </FormFieldWrapper>
    <FormFieldWrapper title="Software Version" :errors="props.errors?.software_version">
      <FormField name="software_version" type="text" placeholder="" v-model="$software_version" />
    </FormFieldWrapper>
    <FormFieldWrapper title="IP Address" :errors="props.errors?.ip_address">
      <FormField name="ip_address" type="text" placeholder="" v-model="$ip_address" />
    </FormFieldWrapper>
    <FormFieldWrapper title="System Status" :errors="props.errors?.system_status">
      <FormSelect name="system_status" v-model="$system_status">
        <option v-for="status in RobotStatus" :key="status" :value="status">{{ status }}</option>
      </FormSelect>
    </FormFieldWrapper>
    <div>
      <FormButton fullWidth size="l" type="submit">Add</FormButton>
    </div>
  </form>
</template>

<style scoped>
.robot-create-form {
  display: flex;
  flex-direction: column;
  gap: var(--grid-gap-2);
}
</style>
