<template>
  <div class="container">
    <div class="row">
      <div class="col p-3">
        <h2>Update</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label htmlFor="todo">Name:</label>
          <input
            type="text"
            class="form-control"
            v-model="state.todoitemlocal.title"
          />
        </div>
        <!-- <div class="form-group">
              <label htmlFor="desc">Description:</label>
              <textarea class="form-control" rows="3" id="desc" v-model="state.todoitemlocal.title"></textarea>  
          </div> -->
        <div class="form-group">
          <label htmlFor="desc">Đã hoàn thành : </label>&nbsp;
          <input type="checkbox" v-model="state.todoitemlocal.completed" />
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary m-1" @click="updateTodo">
            Update
          </button>
          <button type="button" class="btn btn-primary m-1" @click="cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const currentRoute = useRoute();

    const todoitem = store.state.todolist.find(
      (item) => item.id === parseInt(currentRoute.params.id)
    );

    const state = reactive({
      todoitemlocal: { ...todoitem },
    });

    //   console.log(store.state.todolist[0])

    const updateTodo = () => {
      router.push({ name: 'todoList' });
      store.dispatch('UPDATE_TODO', { todoitem: state.todoitemlocal });
    };

    const cancel = () => {
      router.push({ name: 'todoList' });
    };

    return { state, updateTodo, cancel };
  },
};
</script>

<style></style>
