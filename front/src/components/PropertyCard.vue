<template>
  <a-card hoverable @click="openModal">
    <template #cover>
      <div class="image-container">
        <a-skeleton-image v-if="isImageLoading" class="skeleton-image" />
        <img
          :alt="property.address"
          :src="property.image"
          style="width: 100%; max-height: 200px; object-fit: cover;"
          loading="lazy"
          @load="onImageLoad"
          :style="{ display: isImageLoading ? 'none' : 'block' }"
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
}

.skeleton-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

:deep(.ant-skeleton-image) {
  width: 100%;
  height: 100%;
}
</style>
