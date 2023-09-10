<script setup lang="ts">
import { reactive, watch } from "vue";
import RobotForm from "@/components/RobotForm.vue";
import type { RobotCreate } from "@/client";

const $robotCreate = reactive<RobotCreate>({
  name: "",
  model: "",
  ip_address: "",
  serial_number: "",
  software_version: "",
});

watch(
  $robotCreate,
  (value) => {
    console.log(value);
  },
  {
    deep: true,
  },
);
</script>

<template>
  <h1>Robot Create</h1>

  <RobotForm v-model="$robotCreate" />
</template>
