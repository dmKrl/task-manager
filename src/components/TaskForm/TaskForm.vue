<template>
  <form class="form" @submit.prevent>
    <h3>Форма для создания задачи</h3>
    <my-input
      v-model.trim="task.title"
      type="text"
      placeholder="Название задачи"
    />
    <span v-if="formErrors.title" class="error-message">{{
      formErrors.title
    }}</span>

    <my-input
      v-model.trim="task.description"
      type="text"
      placeholder="Описание задачи"
    />
    <span v-if="formErrors.description" class="error-message">{{
      formErrors.description
    }}</span>

    <my-button @click="createTask">Создать</my-button>
  </form>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';

export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        status: false,
      },
      formErrors: {
        title: '',
        description: '',
      },
      taskStore: useTaskStore(),
    };
  },
  methods: {
    validate() {
      this.formErrors.title =
        this.task.title.length > 0 ? '' : 'Введите название задачи';
      this.formErrors.description =
        this.task.description.length > 0 ? '' : 'Введите описание задачи';
    },
    createTask() {
      this.validate();
      if (this.formErrors.title === '' && this.formErrors.description === '') {
        this.task.id = Date.now();
        this.taskStore.addTask(this.task);
        this.taskStore.setDialogVisible(false);
        this.task = {
          title: '',
          description: '',
          status: false,
        };
      }
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  min-width: 400px;
  gap: 15px;
}

.error-message {
  color: red;
}
@media (max-width: 401px) {
  .form {
    min-width: 260px;
  }
}
</style>
