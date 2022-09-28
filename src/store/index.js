import Vuex from 'vuex';
import shortid from 'shortid';
import axios from 'axios';

import { v4 as uuidv4 } from 'uuid';

export default Vuex.createStore({
  state: {
    todolist: [],
    loading: false,
  },
  mutations: {
    SET_TODOS: (state, payload) => {
      state.todolist = payload;
    },
    ADD_TODO: (state, payload) => {
      state.todolist.unshift({
        ...payload.todoitem,
        id: uuidv4(),
        completed: false,
      });
      state.todoitem = { id: '', title: '', userId: '', completed: false };
    },
    DELETE_TODO: (state, payload) => {
      state.todolist = state.todolist.filter((todo) => todo.id !== payload.id);
    },
    TOGGLE_DONE: (state, payload) => {
      state.todolist.map((todo) => {
        if (todo.id === payload.id) todo.completed = !todo.completed;
        return todo;
      });
    },
    UPDATE_TODO: (state, payload) => {
      let index = state.todolist.findIndex(
        (item) => item.id === payload.todoitem.id
      );
      state.todolist[index] = payload.todoitem;
    },
    INITIALIZE_TODOITEM: (state, payload) => {
      if (payload && payload.data) {
        state.todoitem = payload.data;
      } else {
        state.todoitem = { userId: '', id: '', title: '', completed: false };
      }
      //   console.log(state.todoitem);
    },
    setLoading: (state, payload) => {
      if (payload) state.loading = true;
      state.loading = false;
    },
  },
  actions: {
    SET_TODOS: async ({ commit }) => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?_limit=5'
        );
        commit('SET_TODOS', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    ADD_TODO: async ({ commit }, payload) => {
      try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', payload);
        commit('ADD_TODO', payload);
      } catch (error) {
        console.log(error);
      }
    },
    DELETE_TODO: async ({ commit }, payload) => {
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${payload}`
        );
        commit('DELETE_TODO', payload);
      } catch (error) {
        console.log(error);
      }
      //   store.commit(DELETE_TODO, payload);
    },
    TOGGLE_DONE: (store, payload) => {
      store.commit('TOGGLE_DONE', payload);
    },
    UPDATE_TODO: async (store, payload) => {
      try {
        await axios.put(
          `https://jsonplaceholder.typicode.com/todos/1`,
          payload
        );
        commit('UPDATE_TODO', payload);
      } catch (error) {
        console.log(error);
      }
      store.commit('UPDATE_TODO', payload);
    },
    INITIALIZE_TODOITEM: async ({ commit }, payload) => {
      commit('INITIALIZE_TODOITEM', payload);
    },
    setLoading: (store, payload) => {
      store.commit('setLoading', payload);
    },
  },
});
