<template>
  <div>
   <navMenu></navMenu>
  </div>
</template>

<script>
import nav from '../components/nav.vue';
export default {
  name:'home',
  data() {
    return {};
  },
  components: {
    navMenu:nav,
  },
};

</script>

<style>
  ul,li,body,html{
    padding:0;
    margin:0;
    list-style: none;
  }
</style>
