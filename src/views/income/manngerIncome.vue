<template>
  <div id="manngerIncome">
      <ul class="admin-list">
      	<li v-for="item in routes">
      		<div class="list-div" v-for="(child,index) in item.children" :key = 'index'>
      			<router-link v-for="(child1,index) in child.children" :to="{path:child1.path}" :key="index1">
      			{{ child1.alias }}
      			</router-link>
      		</div>
      	</li>
      </ul>
      <section class="content">
      	<router-view></router-view>
      </section>
  </div>
</template>

<script>
export default{
  name: 'manngerIncome',
  data(){
  	return {
  		routes:this.$router.options.routes
  	}
  }
}
</script>

<style lang="scss" scoped>
#manngerIncome {
  width:100%;
  height:20px;
  .admin-list{
  	width:100%;
  	height:40px;
  	background:deeppink;

  	li{
  		width:280px;
  		height:100%;
  		background:#ccc;
  		list-style:none;
		.list-div{
			width:280px;
  			height:100%;
  			display:flex;
  			justify-content:flex-start;
  			align-items:center;
  			a{
				display:inline-block;
				color:#000;
				width:100%;
				height:100%;
	  			font:bold 18px/40px "宋体";
	  			text-decoration:none;
	  		}
	  		a:hover{
	  			background:green;
	  		}
		}
  	}
  }
  .content{
  	width:100%;
  	height:200px;
  	background:#fff;
  }
}
</style>
