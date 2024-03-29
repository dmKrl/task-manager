<template>
  <div class="task-item">
    <div><strong>Название:</strong> {{ task.title }}</div>
    <div>
      <strong>Состояние:</strong>
      {{ !task.status ? 'Не выполнена' : 'Выполнена' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
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
}
</style>
