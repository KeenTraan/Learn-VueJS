<template>
  <div class="Todo-view">
    <Sidebar />
    <div class="body">
      <Search />
      <div class="item-list">
        <TodoApp />
      </div>
    </div>
  </div>
</template>

<script>
import TodoApp from '@/components/TodoComponent/TodoAppComponent.vue'
import Sidebar from '@/components/SidebarComponent/SidebarComponent.vue'
import Search from '@/components/SearchComponent/SearchComponent.vue'
export default {
  components: {
    Sidebar,
    TodoApp,
    Search
  }
}
</script>

<style scoped>
.Todo-view {
  display: flex;
}
.body {
  display: flex;
  flex-direction: column;
}
.item-list {
  display: flex;
}
</style>