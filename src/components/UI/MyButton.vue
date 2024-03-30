<template>
  <button class="form-button"><slot></slot></button>
</template>

<script>
export default {
  name: 'my-button',
};
</script>

<style scoped>
.form-button {
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
