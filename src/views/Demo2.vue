<template>
  <div id="demo2">
    <h1>Even and Merhod</h1>
    <button class="btn btn-success" @click="clickMe">ภาษาอังกฤษ</button>
    <button class="btn btn-success" @click="clickMe2('สวัสดีครับ')">
      ภาษาไทย
    </button>
    <h2>{{ ret() }}</h2>
    <button class="btn btn-success" @click="show = true">click</button>
    <h1 v-if="show">HI!</h1>
  </div>
</template>

<script>
export default {
  name: "demo2",
  mounted() {
    this.initial();
  },
  methods: {
    initial() {
      console.log("sdsdsdsdsd");
    },
    clickMe() {
      alert("hello");
    },
    clickMe2(message) {
      alert(message);
    },
    ret() {
      return Date();
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style></style>
