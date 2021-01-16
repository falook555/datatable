<template>
  <div id="pagination">
    <div class="pagination-row">
      <button class="pagination-button btn btn-outline-secondary">&lt;-</button>
      <span v-for="(item, index) in new Array(10)" :key="index">
        <button class="pagination-button btn btn-outline-secondary">{{ index + 1 }}</button>
      </span>
      <button class="pagination-button btn btn-outline-secondary">-&gt;</button>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "pagination",
};
</script>

<style scope>
.pagination-button {
  padding: 10px;
  margin: 2px;
  /* border-radius: px; */
  font-size: 1em;
  cursor: pointer;
}

.pagination-row{
    padding: 5px 0;
}
</style>
