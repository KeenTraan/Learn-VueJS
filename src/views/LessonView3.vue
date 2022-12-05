<template>
  <div id="lessonview">
    <SideBar />
    <h3>Lesson 3</h3>
  </div>
</template>

<script>
import SideBar from "@/components/SidebarComponent/SidebarComponent.vue";
export default {
  name: "LessonView3",
  components: {
    SideBar,
  },
};
</script>

<style scoped>
#lessonview {
  display: flex;
}
</style>
