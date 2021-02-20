<template>
  <div class="container">
    <div class="back" @click="back">返回</div>
    <div>留学</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.back {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>
