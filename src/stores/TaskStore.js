import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    dialogVisible: false,
    taskChoose: {},
    searchQuery: '',
    selectedSort: '',
    sortOptions: [
      { value: 'title', name: 'По названию' },
      { value: 'status', name: 'По статусу' },
    ],
    isEditing: false,
    editedDescription: '',
    editedTask: {},
  }),
  getters: {
    sortedTasks(state) {
      return [...state.tasks].sort((a, b) => {
        if (state.selectedSort === 'title') {
          return a.title.localeCompare(b.title);
        } else if (state.selectedSort === 'status') {
          return a.status - b.status;
        } else {
          return 0;
        }
      });
    },
    sortedAndSearchTasks() {
      return this.sortedTasks.filter((task) =>
        task.title.includes(this.searchQuery)
      );
    },
  },
  actions: {
    setTasks(task) {
      this.tasks = tasks.push(task);
    },
    setDialogVisible(boolean) {
      this.dialogVisible = boolean;
    },
    setSortOption(selectOption) {
      this.selectedSort = selectOption;
    },
    removeTask(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },
    addTask(task) {
      this.tasks.push(task);
    },
    updateTaskStatus(task) {
      const index = this.tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        this.tasks[index].status = !this.tasks[index].status;
      }
    },
  },
});
