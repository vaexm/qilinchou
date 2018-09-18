<template>
  <div>
    <!-- 首页 -->
    <div v-if='active == 0'>
      <home />
    </div>
    <!-- 发现 -->
    <div v-if='active == 1'>
      <discover />
    </div>
    <!-- 我的 -->
    <div v-if='active == 2'>
      <my />
    </div>
    <!-- tabBar -->
    <div class="footer">
      <van-tabbar v-model="active" >
        <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item icon="records">发布</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
var  activeRecord = 0;
import Home from './home'
import Discover from './discover'
import My from './my'

export default {
  data() {
    return {
      active: activeRecord
    }
  },
  watch: {
    active(e){
      activeRecord = e;
    }
  },
  mounted: function(){
    console.log(this.$router)
  },
  methods: {},
  components: {Home, Discover, My}
};
</script>
<style scoped>
.footer{position: relative;z-index: 99999;}
</style>

