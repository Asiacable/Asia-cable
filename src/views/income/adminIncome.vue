<template>
  <div id="adminIncome">
      我是管理员收入页面
  </div>
</template>

<script>
export default {
  name: 'adminIncome',
  data(){
  	return {
  		routes:this.$router.options.routes
  	}
  }
}
</script>

<style lang="scss" scoped>
#adminIncome {
  width:100%;
  height:20px;
}
</style>
