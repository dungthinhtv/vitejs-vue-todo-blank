<template>
  <li :class="checked(todoitem.completed)" @click="toggleDone(todoitem.id)">
    <span
      :class="{ pointer: true, 'todo-done': todoitem.completed }"
      :title="'Name: ' + todoitem.title"
    >
      {{ todoitem.title }}
      {{ todoitem.completed ? ' (Hoàn thành)' : '' }}
    </span>
    <div class="float-right">
      <span
        class="badge badge-secondary pointer ml-1"
        @click.stop="editTodo(todoitem.id)"
        >Edit</span
      >
      <span
        class="badge badge-secondary pointer ml-1"
        @click.stop="deleteTodo(todoitem.id)"
        >Delete</span
      >
    </div>
  </li>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  props: {
    todoitem: Object,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const checked = (done) => {
      return { 'list-group-item': true, 'list-group-item-success': done };
    };
    const toggleDone = (id) => {
      store.dispatch('TOGGLE_DONE', { id });
    };
    const deleteTodo = (id) => {
      store.dispatch('DELETE_TODO', { id });
    };
    const editTodo = (id) => {
      store.dispatch('INITIALIZE_TODOITEM', {
        todoitem: { ...props.todoitem },
      });
      router.push({ name: 'updateTodo', params: { id } });
    };

    return { toggleDone, deleteTodo, editTodo, checked };
  },
};
</script>

<style></style>
