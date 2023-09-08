<script lang="ts" setup>
import FormField from "@/components/FormField.vue";
import FormFieldWrapper from "@/components/FormFieldWrapper.vue";
import { $RobotCreate, type RobotCreate } from "@/client";
import FormButton from "@/components/FormButton.vue";

const props = defineProps<{
  robot: RobotCreate;
}>();

const emits = defineEmits<{
  // (e:"submit", robot: Robot) => void;
}>();

const handleSubmit = (event: Event) => {
  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);
};

</script>

<template>
  <form action="" @submit="handleSubmit">
    <template v-for="(field, name) in $RobotCreate.properties" :key="name">
      <FormFieldWrapper :label="name">
        <FormField :name="name" :type="field.type" />
      </FormFieldWrapper>
    </template>
    <div>
      <FormButton type="submit">Submit</FormButton>
    </div>
  </form>
</template>
