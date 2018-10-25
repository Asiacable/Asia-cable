import Vue from 'vue';
import Router from 'vue-router';
    //一级默认路由
import Admin from '../admin';
// import Index from '../views/index.vue';
//import Index from '../views/mine/index';
//import Mine from '../views/mine/mine';
    //二级路由
import adminIncome from '../views/income/adminIncome';
import manngerIncome from '../views/income/manngerIncome';
   //三级路由
import Page1 from '../views/income/page1';
import Page2 from '../views/income/page2';
   //四级路由
import Num1 from '../views/pop/num1';
import Num2 from '../views/pop/num2';

Vue.use(Router)
//component 组件的意思

const router = new Router({
  mode:'history',
  routes:[
    {
      path: '/',//默认路由，进入页面就显示的内容
      name: 'admin',
      component: Admin,
      children:[
        {
          path:'/adminIncome',
          name:'adminIncome',
          alias:'管理员收入',
          component:adminIncome,
        },
        {
          path:'/manngerIncome',
          name:'manngerIncome',
          alias:'经理收入',
          component:manngerIncome,
          //重定向，指向子级路由的默认路由
          redirect:'/manngerIncome/page2',
          children:[
            {
              path:'/manngerIncome/page1',
              name:'page1',
              alias:'page1页面',
              component:Page1,
              children:[
              	{
              		path:'/num1',
              		alias:'num1',
              		name:'num1',
              		component:Num1,
              	},
              	{
              		path:'/num2',
              		alias:'num2',
              		name:'num2',
              		component:Num2,
              	}
              ]
            },
            {
              path:'/manngerIncome/page2',
              name:'page2',
              alias:'page2页面',
              component:Page2,
            }
          ]
        }
      ]
      // 嵌套路由
      // children:[
      //   {path:'/index',alias:'首页',name:'index',component:Index},
      //   {path:'/mine',alias:'个人中心',name:'mine',component:Mine}
      // ]
    }
  ]
})
//设置默认显示的内容
router.replace('/adminIncome');
//就是将此路由对象暴露出去
export default router;

