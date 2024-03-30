<template>
  <div class="task-choose">
    <h2>Название задачи: {{ taskStore.taskChoose.title }}</h2>
    <p>Описание: {{ taskStore.taskChoose.description }}</p>
    <p v-if="taskStore.taskChoose.status">
      Статус: <span class="task-done">Выполнена</span>
    </p>
    <p v-else>Статус: <span class="task-nodone">Не выполнена</span></p>
  </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';

export default {
  data() {
    return {
      taskStore: useTaskStore(),
    };
  },
};
</script>

<style scoped>
.task-choose {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px;
  background-color: lightgray;
  border-radius: 12px;
}

</style>
