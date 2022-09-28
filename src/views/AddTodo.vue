<template>
  <div class="container">
    <div class="row">
      <div class="col p-3">
        <h2>Thêm việc cần làm</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label htmlFor="todo">User ID:</label>
          <input
            type="text"
            class="form-control"
            v-model="state.todoitemlocal.userId"
          />
        </div>

        <div class="form-group">
          <label htmlFor="todo">Title:</label>
          <input
            type="text"
            class="form-control"
            v-model="state.todoitemlocal.title"
          />
        </div>
        <!-- <div class="form-group">
            <label htmlFor="desc">Description:</label>
            <textarea
              class="form-control"
              rows="3"
              id="desc"
              v-model="state.todoitemlocal.name"
            ></textarea>
          </div> -->
        <div class="form-group">
          <button type="button" class="btn btn-primary m-1" @click="addTodo">
            Add
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
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      todoitemlocal: { id: '', title: '', userId: '', completed: false },
    });

    const addTodo = () => {
      if (state.todoitemlocal.title.trim().length >= 2) {
        store
          .dispatch('ADD_TODO', {
            todoitem: state.todoitemlocal,
          })
          .then(() => {
            store.dispatch('setLoading', true);
          })
          .finally(() => {
            store.dispatch('setLoading', false);
          });
        router.push({ name: 'todoList' });
      } else {
        alert('Tối thiểu 2 kí tự');
      }
    };
    const cancel = () => {
      router.push({ name: 'todoList' });
    };

    return { state, addTodo, cancel };
  },
};
</script>

<style></style>
