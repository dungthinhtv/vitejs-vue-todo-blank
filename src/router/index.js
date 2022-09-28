import { createRouter, createWebHistory } from 'vue-router';
import AddTodo from '../views/AddTodo.vue';
import UpdateTodo from '../views/UpdateTodo.vue';
import TodoList from '../views/TodoList.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '', redirect: { name: 'todoList' } },
  { path: '/home', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/todos', name: 'todoList', component: TodoList },
  { path: '/todos/add', name: 'addTodo', component: AddTodo },
  { path: '/todos/update/:id', name: 'updateTodo', component: UpdateTodo },
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
