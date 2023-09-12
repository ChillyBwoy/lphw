<script lang="ts" setup>
import WifiIcon from "@heroicons/vue/24/solid/WifiIcon";
import NoSymbolIcon from "@heroicons/vue/24/solid/NoSymbolIcon";
import IconContainer from "@/components/IconContainer.vue";

const props = defineProps<{
  connected: boolean;
}>();
</script>

<style scoped></style>

<template>
  <IconContainer size="xl">
    <WifiIcon v-if="props.connected" />
    <NoSymbolIcon v-else />
  </IconContainer>
</template>
