<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="navbar-link">Главная</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #f4f4f4;
  box-shadow: 2px 2px 4px gray;
  padding: 0 15px;
  width: 50%;
  display: flex;
  justify-content: center;
}
.navbar-link {
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  text-decoration: underline;
  transition: all 0.1s ease;
}
.navbar-link:hover {
  color: rgb(170, 170, 170);
  text-decoration: none;
  transition: all 0.1s ease;
}
.navbar-link:active {
  color: #1a1a1a;
  text-decoration: none;
  transition: all 0.1s ease;
}
</style>
