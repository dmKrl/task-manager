<template>
  <div class="wrapper">
    <div class="container">
      <h1>Страница с задачами</h1>
      <my-input
        placeholder="Поиск..."
        v-model="taskStore.searchQuery"
        type="search"
      />
      <div class="app__buttons">
        <my-button @click="this.taskStore.setDialogVisible(true)"
          >Создать задачу</my-button
        >
        <my-select></my-select>
      </div>
      <my-dialog v-model:show="this.taskStore.dialogVisible">
        <task-form />
      </my-dialog>
      <task-list />
    </div>
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm/TaskForm.vue';
import TaskList from '@/components/TaskList/TaskList.vue';
import { useTaskStore } from '@/stores/TaskStore';

export default {
  components: {
    TaskForm,
    TaskList,
  },
  data() {
    return {
      taskStore: useTaskStore(),
    };
  },
};
</script>

<style>
.wrapper {
  width: 100vw;
  height: 85vh;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
  background: #f4f4f4;
}
.container h1 {
  margin-bottom: 20px;
}
.app__buttons {
  display: flex;
  margin: 20px 0px;
  gap: 20px;
}
</style>
