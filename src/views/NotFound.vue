<template>
  <div className="m-3">
    <h3>Đường dẫn không tồn tại</h3>
    <p>Đường dẫn yêu cầu: {{ fullPath }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const fullPath = route.fullPath;
    return { fullPath };
  },
};
</script>

<style></style>
