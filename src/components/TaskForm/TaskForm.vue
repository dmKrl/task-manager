<template>
  <form class="form" @submit.prevent>
    <input
      v-model="task.title"
      class="form-input"
      type="text"
      name=""
      id=""
      placeholder="Название задачи"
    />
    <input
      v-model="task.description"
      class="form-input"
      type="text"
      name=""
      id=""
      placeholder="Описание задачи"
    />
    <button class="form-button" @click="createTask">Создать</button>
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
}
.form-input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 10px;
}
.form-input:focus {
  outline: none;
}
.form-button {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  transition: all 0.2s ease;
}
.form-button:hover {
  background: teal;
  color: rgb(255, 255, 255);
  transition: all 0.2s ease;
}
</style>
