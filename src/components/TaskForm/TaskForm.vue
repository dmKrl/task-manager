<template>
  <form class="form" @submit.prevent>
    <h3>Форма для создания задачи</h3>
    <my-input
      v-model.trim="task.title"
      type="text"
      name=""
      id=""
      placeholder="Название задачи"
    />
    <my-input
      v-model.trim="task.description"
      type="text"
      name=""
      id=""
      placeholder="Описание задачи"
    />
    <my-button @click="createTask">Создать</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        status: false,
      },
    };
  },
  methods: {
    createTask(event) {
      this.task.id = Date.now();
      this.$emit('create', this.task);
      this.task = {
        title: '',
        description: '',
      };

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
</style>
