<script lang="ts" setup>
import { reactive, ref } from "vue";
import { $Robot, type Robot } from "@/client";
import { ROBOT_FORM_TEXT_PROPS } from "@/constants/forms";
import FormField from "@/components/FormField.vue";
import FormFieldWrapper from "@/components/FormFieldWrapper.vue";
import FormButton from "@/components/FormButton.vue";

const props = defineProps<{
  modelValue: Partial<Robot>;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", robot: Partial<Robot>): void;
}>();

const localModel = reactive<Partial<Robot>>({});

const handleSubmit = (event: Event) => {
  event.preventDefault();
  emit("update:modelValue", localModel);
};
</script>

<template>
  <form action="" @submit="handleSubmit" class="robot-create-form">
    <template v-for="(field, name) in $Robot.properties" :key="name">
      <template v-if="name in modelValue">
        <FormFieldWrapper :title="ROBOT_FORM_TEXT_PROPS[name]?.title || name">
          <FormField
            :name="name"
            :type="$Robot.properties[name].type"
            :placeholder="ROBOT_FORM_TEXT_PROPS[name]?.placeholder"
            v-model="localModel[name]"
          />
        </FormFieldWrapper>
      </template>
    </template>
    <div>
      <FormButton type="submit">Submit</FormButton>
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
