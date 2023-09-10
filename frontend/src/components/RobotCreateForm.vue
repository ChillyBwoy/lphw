<script lang="ts" setup>
import { ref } from "vue";
import { type RobotCreate } from "@/client";
import FormField from "@/components/Form/FormField.vue";
import FormFieldWrapper from "@/components/Form/FormFieldWrapper.vue";
import FormButton from "@/components/Form/FormButton.vue";

const $name = ref("");
const $model = ref("");
const $serial_number = ref("");
const $software_version = ref("");
const $ip_address = ref("");

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
  });
};
</script>

<template>
  <form action="" @submit="handleSubmit" class="robot-create-form">
    <FormFieldWrapper title="Name">
      <FormField name="name" type="text" placeholder="Robot Name" v-model="$name" required />
    </FormFieldWrapper>
    <FormFieldWrapper title="Model">
      <FormField name="model" type="text" placeholder="" v-model="$model" required />
    </FormFieldWrapper>
    <FormFieldWrapper title="Serial Number">
      <FormField name="serial_number" type="text" placeholder="" v-model="$serial_number" required />
    </FormFieldWrapper>
    <FormFieldWrapper title="Software Versio">
      <FormField name="software_version" type="text" placeholder="" v-model="$software_version" required />
    </FormFieldWrapper>
    <FormFieldWrapper title="IP Address">
      <FormField name="ip_address" type="text" placeholder="" v-model="$ip_address" />
    </FormFieldWrapper>
    <div>
      <FormButton type="submit">Add</FormButton>
    </div>
  </form>
</template>

<style scoped>
.robot-create-form {
  display: flex;
  flex-direction: column;
  gap: 8px;

  box-sizing: border-box;
  padding: 2rem;
}
</style>
