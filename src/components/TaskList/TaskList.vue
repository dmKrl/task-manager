<template>
  <div class="task-list">
    <h3>Список задач</h3>
    <task-item v-for="task in tasks" :task="task" />
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem/TaskItem';

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
}
</style>
