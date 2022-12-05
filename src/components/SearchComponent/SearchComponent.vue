<template>
  <nav class="navbar">
  <div class="container-fluid">
    <div class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Nhập từ khóa tìm kiếm nhiệm vụ" aria-label="Search" >
      <button class="btn" type="submit">Search</button>
    </div>
  </div>
</nav>
</template>

<script>
// import TodoApp from '@/views/TodoAppView.vue'
export default {
  name: "searchBar",
  methods: {
    searchItem(event) {
      this.$emit('query', event.target.value);
    }
  },
}
</script>

<style scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.navbar {
  position: relative;
  top: 5px;
}
.d-flex {
  width: 30rem;
}
.form-control {
  margin-right: 10px;
}
.btn {
  padding: 0 20px 0 20px;
  background-color: green;
  color: white;
}

</style>