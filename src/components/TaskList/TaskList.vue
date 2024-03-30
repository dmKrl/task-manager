<template>
  <div class="task-list" v-if="tasks.length > 0">
    <h3>Список задач</h3>
    <task-item
      v-for="task in tasks"
      :task="task"
      :key="task.id"
      @removeTask="$emit('removeTask', task)"
    />
  </div>
  <h2 v-else class="task-heading__list">Список задач пуст</h2>
</template>

<script>
import TaskItem from '@/components/TaskItem/TaskItem.vue';

export default {
  components: { TaskItem },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
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
</style>
