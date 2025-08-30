<template>
  <a-card hoverable @click="openModal">
    <template #cover>
      <div class="image-container">
        <div v-if="isImageLoading" class="spinner-container">
          <a-spin />
        </div>
        <img
          :alt="property.address"
          :src="property.image"
          style="width: 100%; max-height: 200px; object-fit: cover;"
          loading="lazy"
          @load="onImageLoad"
          :class="{ 'image-visible': !isImageLoading }"
        />
      </div>
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
import { ref } from 'vue';
import type { Property } from '../types';

const props = defineProps<{
  property: Property
}>();

const emit = defineEmits(['open-modal']);

const isImageLoading = ref(true);

const onImageLoad = () => {
  isImageLoading.value = false;
};

const openModal = () => {
  emit('open-modal', props.property);
};
</script>

<style scoped>
.image-container {
  height: 200px;
  position: relative;
  background-color: #f0f2f5; /* Light grey background for the container */
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner-container {
  position: absolute;
}

.image-container img {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  width: 100%; /* Ensure image fills the container */
  height: 100%; /* Ensure image fills the container */
}

.image-container .image-visible {
  opacity: 1;
}

:deep(.ant-skeleton-image) {
  width: 100%;
  height: 100%;
}
</style>
