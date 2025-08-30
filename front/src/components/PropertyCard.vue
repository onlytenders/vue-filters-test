<template>
  <a-card hoverable @click="openModal">
    <template #cover>
      <img :alt="property.address" :src="property.image" style="height: 200px; object-fit: cover;" />
    </template>
    <a-card-meta :title="property.address">
      <template #description>
        <p>Площадь: {{ property.area }} м²</p>
        <p>Комнат: {{ property.rooms }}</p>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
import type { Property } from '../types';

const props = defineProps<{
  property: Property
}>();

const emit = defineEmits(['open-modal']);

const openModal = () => {
  emit('open-modal', props.property);
};
</script>

<style scoped>
/* Styles for property card */
</style>
