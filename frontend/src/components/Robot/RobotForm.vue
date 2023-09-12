<script lang="ts" setup>
import { ref } from "vue";
import { RobotStatus, type Robot } from "@/client";
import FormField from "@/components/Form/FormField.vue";
import FormFieldWrapper from "@/components/Form/FormFieldWrapper.vue";
import FormButton from "@/components/Form/FormButton.vue";
import FormSelect from "@/components/Form/FormSelect.vue";

type RobotFormErrors = Partial<Record<keyof Robot, Array<{ type: string; message: string }>>>;

const props = defineProps<{
  errors?: RobotFormErrors;
  robot?: Partial<Robot>;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "submit", robot: Partial<Robot>): void;
}>();

const $name = ref(props.robot?.name);
const $model = ref(props.robot?.model);
const $serial_number = ref(props.robot?.serial_number);
const $software_version = ref(props.robot?.software_version);
const $ip_address = ref(props.robot?.ip_address);
const $system_status = ref(props.robot?.system_status || RobotStatus.IDLE);

const handleSubmit = (event: Event) => {
  event.preventDefault();

  const payload: Partial<Robot> = {
    name: $name.value,
    model: $model.value,
    serial_number: $serial_number.value,
    software_version: $software_version.value,
    ip_address: $ip_address.value,
    system_status: $system_status.value,
  };
  emit("submit", payload);
};
</script>

<style scoped>
.robot-form {
  gap: var(--spacing-2);
  display: flex;
  flex-direction: column;
}

.robot-form__actions {
  display: flex;
  justify-content: center;
}
.robot-form__button {
  width: 100%;
}

@media (min-width: 768px) {
  .robot-form__button {
    width: auto;
  }
}
</style>

<template>
  <form @submit="handleSubmit" class="robot-form">
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
    <div class="robot-form__actions">
      <FormButton class="robot-form__button" size="l" type="submit" :disabled="props.disabled">Save</FormButton>
    </div>
  </form>
</template>
