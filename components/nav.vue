<template>
    <ul class="nav-menu">
      <li><router-link to='/home'>课程体系</router-link></li>
      <li><router-link to="/teacher">欧那师资</router-link></li>
      <li><router-link to="/abroad">留学服务</router-link></li>
      <li><router-link to="/course">课程课表</router-link></li>
    </ul>
</template>
<style>
.nav-menu{
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
}
.nav-menu li{
  flex:1;
  line-height: 50px;
  text-align: center;
  border-right:1px solid #ddd;
}
.nav-menu li a{
  color:#333;
  text-decoration:none;
}
</style>
<script>
export default {
  created() {
  },
  computed: {
    
  },
  mounted(){
  }
}
</script>