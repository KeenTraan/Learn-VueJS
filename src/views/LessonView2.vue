<template>
  <div id="lessonview2">
    <SideBar />
    <h3>Lesson 2</h3>
  </div>
</template>

<script>
import SideBar from "@/components/SidebarComponent/SidebarComponent.vue";
export default {
  name: "LessonView2",
  components: {
    SideBar,
  },
};
</script>

<style scoped>
#lessonview2 {
  display: flex;
}
</style>
