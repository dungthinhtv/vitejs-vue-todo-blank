<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

import { useStore } from 'vuex';

export default {
  components: { Header },
  mounted() {
    const store = useStore();
    store.dispatch('SET_TODOS');
  },
};
</script>

<style></style>
