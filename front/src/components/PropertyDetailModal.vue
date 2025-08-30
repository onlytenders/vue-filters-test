<template>
  <a-modal :open="props.visible" :title="props.property?.address" :footer="null" @cancel="closeModal" :width="600">
    <div v-if="props.property">
      <img :src="props.property.image" :alt="props.property.address" style="width: 100%; height: 300px; border-radius: 8px; margin-bottom: 16px; object-fit: cover;" />
      <p><strong>Площадь:</strong> {{ props.property.area }} м²</p>
      <p><strong>Количество комнат:</strong> {{ props.property.rooms }}</p>
      <p><strong>Описание:</strong></p>
      <p>{{ props.property.description }}</p>
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
