<template>
  <div class="task-list" v-if="taskStore.tasks.length > 0">
    <h3>Список задач</h3>
    <transition-group name="task__list-group">
      <task-item
        v-for="task in taskStore.sortedAndSearchTasks"
        :task="task"
        :key="task.id"
      />
    </transition-group>
  </div>
  <h2 v-else class="task-heading__list">Список задач пуст</h2>
</template>

<script>
import TaskItem from '@/components/TaskItem/TaskItem.vue';
import { useTaskStore } from '@/stores/TaskStore';

export default {
  data() {
    return {
      taskStore: useTaskStore(),
    };
  },
  components: { TaskItem },
};
</script>

<style scoped>
.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
.task-heading__list {
  margin-top: 10px;
  width: 100%;
  border-top: 1px solid teal;
  text-align: center;
}
.task__list-group-item {
  display: inline-block;
  margin-right: 10px;
}
.task__list-group-enter-active,
.task__list-group-leave-active {
  transition: all 0.5s ease;
}
.task__list-group-enter-from,
.task__list-group-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.task__list-group-move {
  transition: transform 0.5s ease;
}
</style>
