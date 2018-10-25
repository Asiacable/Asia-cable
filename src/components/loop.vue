<template>
  <div id="loop">
      我是轮播图组件
      <Btn></Btn>
  </div>
</template>

<script>
//引入响应的组件
import Btn from '../views/btn';
export default {
  name: 'loop',
  components:{
    Btn
  }
}
</script>

<style lang="scss" scoped>
#loop {
  width:100%;
  height:100%;
  background:orange;
}
</style>
