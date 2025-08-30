<template>
  <a-modal :open="visible" :title="property?.address" :footer="null" @cancel="closeModal" :width="600">
    <div v-if="property">
      <img :src="property.image" :alt="property.address" style="width: 100%; height: 30vw; min-height: 300px; border-radius: 8px; margin-bottom: 16px; object-fit: contain;" />
      <p><strong>Площадь:</strong> {{ property.area }} м²</p>
      <p><strong>Количество комнат:</strong> {{ property.rooms }}</p>
      <p><strong>Описание:</strong></p>
      <p>{{ property.description }}</p>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import type { Property } from '../types';

const props = defineProps<{
  property: Property | null,
  visible: boolean
}>();

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>
