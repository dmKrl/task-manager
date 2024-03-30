import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
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
    dialogVisible: false,
    taskChoose: {},
  }),
  actions: {
    setTasks(task) {
      this.tasks = tasks.push(task);
    },
    setDialogVisible(boolean) {
      this.dialogVisible = boolean;
    },
  },
});
