<template>
  <div>
    <div class="content">
      <div class="item-list">
        <div class="add-item">
          <h5 class="text">New</h5>
          <div class="input-form" v-show="ishiden">
            <input
              type="text"
              name="input"
              placeholder="Nhập tên nhiệm vụ"
              v-model="input_content"
            />
            <br />
            <p style="margin-left: 1rem">{{ `${hours} ${date}` }}</p>
            <button
              :value="save"
              :disabled="this.input_content === ''"
              class="btn-save"
              @click="handleAddItem"
            >
              lưu
            </button>
            <button class="btn-cancel" @click="handleDestroy">hủy bỏ</button>
          </div>
          <div class="todo-list">
            <div
              class="show-item"
              v-for="(item, index) in todoList"
              :key="index"
            >
              <h6 style="margin-left: 1rem">{{ item.taskname }}</h6>
              <p style="margin-left: 1rem">{{ item.currentTime }}</p>
              <button class="btn-save" @click="handleCompletedItem(index)">hoàn thành</button>
              <button class="btn-cancel" @click="handleCancel(index)">từ bỏ</button>
            </div>
          </div>
        </div>
        <div>
          <CompletedTodo v-bind:completed="completed"/>
        </div>
        <div>
          <CancelTodo v-bind:cancel="cancelItem"/>
        </div>
      </div>
      <button 
      type="submit" 
      class="btn-add" 
      @click="ishiden = !ishiden">
        <strong> Thêm Mới </strong>
      </button>
    </div>
  </div>
</template>

<script>
import CompletedTodo from "@/components/TodoComponent/CompletedComponet";
import CancelTodo from "@/components/TodoComponent/CancelComponent.vue"
export default {
  name: "AddItemComponent",
  data() {
    return {
      date: "",
      hours: "",
      ishiden: false,
      input_content: "",
      todoList: JSON.parse(localStorage.getItem("todoList")) ?? [],
      completed: JSON.parse(localStorage.getItem("Completed")) ?? [],
      cancelItem: JSON.parse(localStorage.getItem("Cancel")) ?? []
    };
  },
  methods: {
    handleDestroy() {
      this.input_content = ""
    },
    handleAddItem() {
      const time = `${new Date().getHours()}:${new Date().getMinutes()} ${new Date().getDate()}/${new Date().getMonth()+1} ${new Date().getFullYear()}`;
      const todoAdd = {
        taskname: this.input_content,
        currentTime: time,
      };
      this.todoList = [...this.todoList, todoAdd];
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
      this.input_content = "";
    },
    handleCompletedItem(index) {
      const completedTask = this.todoList[index]
      if(Array.isArray(this.completed)) {
        this.completed.push(completedTask)
      }else {
        this.completed = [completedTask]
      }
      this.todoList = this.todoList.filter((task, i) => i != index)
      localStorage.setItem('Completed', JSON.stringify(this.completed))
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
    handleCancel(index ) {
      const cancelTask = this.todoList[index]
      if(Array.isArray(this.cancelItem)) {
        this.cancelItem.push(cancelTask)
      }else {
        this.cancelItem = [cancelTask]
      }
      this.todoList = this.todoList.filter((task, i) => i != index)
      localStorage.setItem('Cancel', JSON.stringify(this.cancelItem))
      localStorage.setItem('todolist', JSON.stringify(this.todoList))
    },
  },
  mounted() {
    localStorage.setItem("todoList", JSON.stringify(this.todoList));
    this.todoList = JSON.parse(localStorage.getItem("todoList"));

    setInterval(() => {
      const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
      const date = `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`;
      this.hours = time;
      this.date = date;
    }, 1000);
  },
  components: {
    CompletedTodo,
    CancelTodo
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.content {
  display: flex;
  background-color: rgb(221, 219, 219);
  width: 20vw;
  height: 90vh;
  position: relative;
  top: 1rem;

  .item-list {
    display: flex;
    justify-content: center;
    position: relative;
    height: 90vh;
    .text {
      position: absolute;
      left: 0;
      background-color: white;
      width: 20vw;
    }
    .input-form {
      border-radius: 5px;
      margin-top: 2rem;
      margin-left: 15px;
      background-color: white;
      width: 18vw;
      input {
        width: 90%;
        border-radius: 0.5rem;
        margin: 1rem;
        border: 0.5px solid;
      }
    }
  }
  .add-item {
    display: flex;
    flex-direction: column;
    margin-right: 3rem;
    .btn-save {
      background-color: green;
      color: white;
      border: none;
      border-radius: 5px;
      margin: 4px 0 4px 12px;
      padding: 2px 12px 2px 12px;
    }
    .btn-cancel {
      background-color: rgb(220, 20, 60);
      color: white;
      border-radius: 5px;
      border: none;
      float: right;
      margin: 4px 12px 4px 0;
      padding: 2px 12px 2px 12px;
    }
  }
  .btn-add {
    position: absolute;
    bottom: 10px;
    left: 4rem;
    width: 10rem;
    border-radius: 0.5rem;
    border: 0.5px solid green;
    color: green;
  }
  .btn-add:hover {
    outline: 3px solid rgb(176, 232, 250, 0.7);
  }
  .todo-list {
    overflow: auto;
    margin-top: 2rem;
    height: 50vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    .show-item {
      position: relative;
      margin-top: 10px;
      left: 15px;
      border-radius: 5px;
      background-color: white;
      width: 18vw;
    }
  }
  .todo-list::-webkit-scrollbar {
    width: 5px;
    height: 10rem;
  }
  .todo-list::-webkit-scrollbar-thumb {
    background-color: rgba(141, 141, 141, 0.8);
    border-radius: 100rem;
  }
  .todo-list::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 100rem;
  }
}
</style>
