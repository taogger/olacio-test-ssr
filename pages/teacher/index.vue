<template>
  <div class="container">
    <div class="back" @click="back">返回</div>
    <div>师资力量
      <img src="https://file.olacio.com/upload/school/4/banner/4/d9d8b24a-fb1a-4e85-a3e9-a83865ba8ad6/移动.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
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
