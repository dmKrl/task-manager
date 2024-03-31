<template>
  <div class="task-choose">
    <h2>
      Название задачи: <span>{{ taskStore.taskChoose.title }}</span>
    </h2>
    <div class="task-choose__content">
      <p class="task-choose__text">
        Описание:
        <span v-if="!taskStore.isEditing">{{
          taskStore.taskChoose.description
        }}</span>
        <textarea
          v-model="taskStore.editedDescription"
          v-if="taskStore.isEditing"
        ></textarea>
      </p>
      <p class="task-choose__text" v-if="taskStore.taskChoose.status">
        Статус: <span class="task-done">Выполнена</span>
      </p>
      <p class="task-choose__text" v-else>
        Статус: <span class="task-nodone">Не выполнена</span>
      </p>
    </div>
    <div class="task-buttons">
      <my-button @click="toggleEditState">{{
        taskStore.isEditing ? 'Сохранить' : 'Редактировать описание'
      }}</my-button>
      <my-button @click="toggleTaskStatus">Изменить статус</my-button>
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
  methods: {
    toggleTaskStatus() {
      this.taskStore.updateTaskStatus(this.taskStore.taskChoose);
    },
    toggleEditState() {
      this.taskStore.isEditing = !this.taskStore.isEditing;
      if (this.taskStore.isEditing) {
        this.taskStore.editedDescription =
          this.taskStore.taskChoose.description;
      } else {
        this.taskStore.taskChoose.description =
          this.taskStore.editedDescription;
      }
    },
  },
};
</script>

<style scoped>
h2 span {
  font-weight: 400px;
}
.task-choose {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px;
  background-color: #f4f4f4;
  box-shadow: 2px 2px 4px gray;
  border-radius: 12px;
}
.task-choose__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}
.task-choose__text {
  font-size: 20px;
  font-weight: 600;
}
.task-choose__text span {
  display: block;
  word-wrap: break-word;
  max-width: 300px;
  font-weight: 400;
  font-size: 18px;
}
@media (max-width: 400px) {
  .task-choose {
    padding: 10px;
  }
}
</style>
