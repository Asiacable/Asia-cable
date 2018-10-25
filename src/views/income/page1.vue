<template>
  <div id="page1">
      <div v-for="item in routes" class="nav">
      	<div v-for="(child,index) in item.children" :key="index">
      		<div v-for="(child1,index1) in child.children" :key="index1">
      			<router-link v-for="(child2,index2) in child1.children" :key="index2" 
      				:to="{path:child1.path +''+ child2.path}">
      				{{ child2.alias }}
      			</router-link>
      		</div>
      	</div>
      </div>
      <section class="content">
      	<router-view></router-view>
      </section>
  </div>
</template>

<script>
export default{
  name: 'page1',
  data(){
  	return {
  		routes:this.$router.options.routes
  	}
  }
}
</script>

<style lang="scss" scoped>
#page1{
  text-align:center;
  margin-top:100px;
  width:100%;
  color:#000;
  height:200px;
  font:28px/200px "宋体";
  .nav{
  	width:100%;
  	height:80px;
  	div{
  		width:100%;
  		height:100%;
  	}
  }
  .content{
  	margin-top:100px;
  	width:100%;
  	height:100%;
  	background:green;
  	color:#000;
  }
}
</style>
