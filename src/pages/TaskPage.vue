<template>
  <div class="wrapper">
    <div class="container">
      <h1>Страница с задачами</h1>
      <my-button @click="this.taskStore.setDialogVisible(true)"
        >Создать задачу</my-button
      >
      <my-dialog v-model:show="this.taskStore.dialogVisible">
        <task-form @create="createTask" />
      </my-dialog>
      <task-list :tasks="tasks" @removeTask="removeTask" />
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
      tasks: [
        {
          id: 1,
          title: 'Задача 1',
          status: false,
          description: 'Описание ',
        },
        {
          id: 2,
          title: 'Задача 2',
          status: false,
          description: 'Описание ',
        },
        {
          id: 3,
          title: 'Задача 3',
          status: true,
          description: 'Описание ',
        },
        {
          id: 4,
          title: 'Задача 4',
          status: false,
          description: 'Описание ',
        },
      ],
      taskStore: useTaskStore(),
      dialogVisible: false,
    };
  },
  methods: {
    createTask(task) {
      this.tasks.push(task);
      this.taskStore.setDialogVisible(false);
    },
    removeTask(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },
  },
};
</script>

<style>
.wrapper {
  width: 100vw;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
  background: rgb(224, 224, 224);
}
</style>
