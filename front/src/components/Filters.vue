<template>
  <a-card title="Фильтры">
    <a-form layout="vertical">
      <a-form-item label="Площадь (м²)">
        <a-input-group compact>
          <a-input-number v-model:value="filters.area.min" placeholder="От" style="width: 50%" @change="onFilterChange" />
          <a-input-number v-model:value="filters.area.max" placeholder="До" style="width: 50%" @change="onFilterChange" />
        </a-input-group>
      </a-form-item>
      <a-form-item label="Количество комнат">
        <a-input-group compact>
          <a-input-number v-model:value="filters.rooms.min" placeholder="От" style="width: 50%" @change="onFilterChange" />
          <a-input-number v-model:value="filters.rooms.max" placeholder="До" style="width: 50%" @change="onFilterChange" />
        </a-input-group>
      </a-form-item>
      <a-form-item label="Адрес">
        <a-input v-model:value="filters.address" placeholder="Поиск по адресу" @change="onFilterChange" />
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const emit = defineEmits(['filter-change']);

const filters = reactive({
  area: { min: null, max: null },
  rooms: { min: null, max: null },
  address: '',
});

const onFilterChange = () => {
  emit('filter-change', filters);
};
</script>

<style scoped>
/* Styles for filters */
</style>
