<template>
  <div id="admin">
    <!-- 头部banner -->
    <header class="head-top">用户中心</header>
    <!-- 头部以下的内容 -->
    <section class="container">
      <!-- 左侧导航 -->
      <div class="nav">
        <ul class="list">
         <li v-for="item in routes" class="list-li">
           <router-link v-for="(child,index) in item.children" :key="index" :to="{path:child.path}">
           	{{ child.alias }}
           </router-link>
         </li>
        </ul>
      </div>
      <!-- 这块是显示内容的地方 -->
      <section class="content">
        <router-view></router-view>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'admin',
  components:{

  },
  data(){
    return{
      routes:this.$router.options.routes
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.wh{
  width:100%;
  height:100%;
}
#admin{
  @extend .wh;
  background:#ccc;
  .head-top{
    width:100%;
    height:60px;
    background:orange;
    text-align:center;
    font:bold 20px/60px "宋体";
  }
  .container{
    width:100%;
    height:100%;
    position:absolute;
    top:60px;
    left:0px;
    overflow:hidden;
    background:pink;
    display:flex;
    justify-content:flex-start;
    .nav{
      width:200px;
      height:100%;
      background:yellow;
      .list{
        @extend .wh;
        .list-li{
          list-style:none;
          width:100%;
          height:40px;
          a{
            text-decoration:none;
            display:block;
            width:100%;
            height:40px;
            font:20px/40px "微软雅黑";
            border:2px solid #000;
          }
        }
      }
    }
    .content{
      flex:1;
      height:100%;
      background:red;
      font-size:50px;
      color:#fff;
    }
  }
}
</style>
