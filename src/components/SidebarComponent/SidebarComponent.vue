<template>
  <div class="sidebar">
    <h3 class="header-sidebar">Basic Exercise</h3>
    <nav>
        <router-link
          class="nav-link"
          v-for="link in listLink"
          :key="link.id"
          router-link-active
          :to="link.path"
        >
          {{ link.label }}
        </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SibarComponent",
  data() {
    return {
      listLink: [
        {
          id: 1,
          label: "Trang Chủ",
          name: "home",
          path: "/home",
        },
        {
          id: 2,
          label: "Todo App",
          name: "TodoApp",
          path: "/todoapp",
        },
        {
          id: 3,
          label: "Bài 2",
          name: "LessionTwo",
          path: "/lesson2",
        },
        {
          id: 4,
          label: "Bài 3",
          name: "LessionThree",
          path: "/lesson3",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
}
.header-sidebar {
  text-align: center;
}
.sidebar {
  background-color: rgb(242,243,244);
  margin-right: 2rem;
  height: 100vh;
  width: 15vw;
}
.nav-link {
  display: block;
  cursor: pointer;
  position: relative;
  top: 1rem;
  list-style: none;
  font-size: large;
  text-decoration: none;
  color: black;
  padding: 10px;
}
.router-link-active {
  background-color: lightblue;
}

</style>
