<template>
  <select v-model="taskStore.selectedSort" @change="updateSortBy">
    <option disabled value="">Сортировать по:</option>
    <option
      v-for="option in this.taskStore.sortOptions"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';

export default {
  data() {
    return {
      taskStore: useTaskStore(),
    };
  },
  name: 'my-select',
  methods: {
    updateSortBy(e) {
      this.taskStore.setSortOption(e.target.value);
    },
  },
};
</script>

<style scoped></style>
