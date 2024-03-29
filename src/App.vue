<template>
  <div class="wrapper">
    <div class="container">
      <task-form @create="createTask" />
      <task-list :tasks="tasks" />
    </div>
  </div>
</template>

<script>
import TaskForm from './components/TaskForm/TaskForm.vue';
import TaskList from './components/TaskList/TaskList.vue';
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
    };
  },
  methods: {
    createTask(task) {
      this.tasks.push(task);
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  background: rgb(170, 170, 170);
}

button {
  cursor: pointer;
}

.wrapper {
  width: 100vw;
  height: 100vh;
  padding: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  background: rgb(224, 224, 224);
}
</style>
