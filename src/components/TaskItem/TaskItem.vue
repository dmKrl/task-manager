<template>
  <div class="task-item">
    <div>
      <div><strong>Название:</strong> {{ task.title }}</div>
      <div>
        <strong>Состояние: </strong>
        <span v-if="task.status" class="task-done">Выполнена</span>
        <span v-else class="task-nodone">Не выполнена</span>
      </div>
    </div>
    <div class="task-buttons">
      <my-button @click="changeChooseTask">Открыть</my-button>
      <my-button @click="taskStore.removeTask(this.task)">Удалить</my-button>
    </div>
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
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeChooseTask() {
      this.$router.push(`/tasks/${this.task.id}`);
      this.taskStore.taskChoose = this.task;
    },
  },
};
</script>

<style scoped>
.task-item {
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task-buttons {
  display: flex;
  gap: 10px;
}
</style>
