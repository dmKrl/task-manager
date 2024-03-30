<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="form-input"
    type="text"
  />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>
.form-input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
}
.form-input:focus {
  outline: none;
}
</style>
