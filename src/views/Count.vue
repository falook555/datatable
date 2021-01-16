<template>
  <div class="count container">
    <h1 class="page-header">count</h1>
    <h2>{{ count }}</h2>
    <button class="btn btn-success" @click="count = count + 1">+</button>
    <button class="btn btn-success" @click="count = count - 1">-</button>
  </div>
</template>

<script>
export default {
  name: "count",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style></style>
