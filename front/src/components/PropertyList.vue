<template>
  <transition-group tag="div" name="list" class="property-list-grid">
    <div v-for="item in properties" :key="item.id" class="list-item">
      <PropertyCard :property="item" @open-modal="handleShowDetails" />
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import PropertyCard from './PropertyCard.vue';
import type { Property } from '../types';

defineProps<{
  properties: Property[]
}>();

const emit = defineEmits(['show-details']);

const handleShowDetails = (property: Property) => {
  emit('show-details', property);
};
</script>

<style scoped>
.property-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.list-item {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
