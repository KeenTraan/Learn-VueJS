<template>
  <div class="home">
    <SideBar />
    <h3>Home page</h3>
  </div>
</template>

<script>
import SideBar from "@/components/SidebarComponent/SidebarComponent.vue";
export default {
  name: "HomeView",
  components: {
    SideBar
  },
};
</script>
<style >
.home {
  display: flex;
}
</style>
