<template>
  <div class="cancel-item">
    <h5 class="header-item">Cancel</h5>
    <div class="list-item">
      <div
        class="show-cancel-item"
        v-for="(item, index) in cancel"
        :key="index"
      >
        <h6 class="text-item">{{ item.taskname }}</h6>
        <p class="text-item">{{ item.currentTime }}</p>
        <p class="text-item" style="color: red">hủy bỏ lúc:</p>
        <p class="text-item" style="color: red">
          {{
            `${new Date().getHours()}:${new Date().getMinutes()} ${new Date().getDate()}/${
              new Date().getMonth() + 1
            }/${new Date().getFullYear()}`
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cancel: {},
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.cancel-item {
  width: 20vw;
  height: 90vh;
  background-color: rgb(221, 219, 219);
}
.header-item {
  background-color: white;
}
.show-cancel-item {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 15px 0 15px 20px;
  background-color: white;
  width: 17vw;
  .text-item {
    margin: 1px 0 1px 10px;
  }
}
.list-item {
  overflow: auto;
  margin-top: 2px;
  height: 86vh;
}
.list-item::-webkit-scrollbar {
  width: 5px;
  height: 10rem;
}
.list-item::-webkit-scrollbar-thumb {
  background-color: rgba(141, 141, 141, 0.8);
  border-radius: 100rem;
}
.list-item::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 100rem;
}
</style>
