<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Filters from './components/Filters.vue';
import PropertyList from './components/PropertyList.vue';
import PropertyDetailModal from './components/PropertyDetailModal.vue';
import type { Property } from './types.ts';

const properties = ref<Property[]>([]);
const filters = ref({
  area: { min: null, max: null },
  rooms: { min: null, max: null },
  address: '',
});

const selectedProperty = ref<Property | null>(null);
const isModalVisible = ref(false);

onMounted(async () => {
  try {
    const response = await fetch('/db.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    properties.value = await response.json();
  } catch (error) {
    console.error('Не удалось загрузить данные:', error);
  }
});

const filteredProperties = computed(() => {
  return properties.value.filter((property: Property) => {
    const { area, rooms, address } = filters.value;

    const areaMinMatch = area.min ? property.area >= area.min : true;
    const areaMaxMatch = area.max ? property.area <= area.max : true;
    const roomsMinMatch = rooms.min ? property.rooms >= rooms.min : true;
    const roomsMaxMatch = rooms.max ? property.rooms <= rooms.max : true;
    const addressMatch = address ? property.address.toLowerCase().includes(address.toLowerCase()) : true;

    return areaMinMatch && areaMaxMatch && roomsMinMatch && roomsMaxMatch && addressMatch;
  });
});

const handleFilterChange = (newFilters: any) => {
  filters.value = { ...filters.value, ...newFilters };
};

const showPropertyDetails = (property: Property) => {
  selectedProperty.value = property;
  isModalVisible.value = true;
};

const handleModalClose = () => {
  isModalVisible.value = false;
};
</script>

<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="header-content">
        <h2>Недвижимость в Астане</h2>
      </div>
    </a-layout-header>
    <a-layout-content class="content">
      <div class="content-inner">
        <a-row :gutter="[16, 16]">
          <a-col :xs="24" :lg="6">
            <Filters @filter-change="handleFilterChange" />
          </a-col>
          <a-col :xs="24" :lg="18">
            <PropertyList :properties="filteredProperties" @show-details="showPropertyDetails" />
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Недвижимость в Астане ©2025 Created by onlytenders
    </a-layout-footer>
  </a-layout>

  <PropertyDetailModal 
    :property="selectedProperty" 
    :visible="isModalVisible" 
    @close="handleModalClose" 
  />
</template>

<style scoped>

.layout {
  width: 100vw;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.header-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ant-layout-header h2 {
  color: #fff;
  margin: 0;
}

.content {
  padding: 24px 0;
}

.content-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
</style>
