<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import courseList from './components/courseList.vue';
export default {
  beforeCreate() {
    console.log('App beforeCreate'); // 客户端和服务端都执行
  },
  created() {
    console.log('App created'); // 客户端和服务端都执行
  },
  beforeMount() {
    console.log('App beforeMount'); // 只有客户端执行
  },
  mounted() {
    console.log('App mounted');
  },
  methods: {
    
  },
  components: {
    courseList:courseList,
  },
 
}
</script>