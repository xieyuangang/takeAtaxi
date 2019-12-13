import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: '首页',
      component: resolve => require(['@/components/index'], resolve)
    },
    {
      path: '/',
      name: '地图',
      component: resolve => require(['@/components/map'], resolve)
    },{
      path: '/load',
      name: '加载',
      component: resolve => require(['@/components/load'], resolve)
    },{
      path: '/address',
      name: '选择地址',
      component: resolve => require(['@/components/address'], resolve)
    },{
      path: '/login',
      name: '登录',
      component: resolve => require(['@/components/login/login'], resolve)
    },{
      path: '/register',
      name: '注册',
      component: resolve => require(['@/components/login/register'], resolve)
    },{
      path: '/findPassword',
      name: '找回密码',
      component: resolve => require(['@/components/login/findPassword'], resolve)
    },{
      path: '/wallet',
      name: '我的钱包',
      component: resolve => require(['@/components/user/wallet'], resolve)
    },{
      path: '/accountManagement',
      name: '账号管理',
      component: resolve => require(['@/components/user/accountManagement'], resolve)
    },{
      path: '/accountSecurity',
      name: '账号与安全',
      component: resolve => require(['@/components/user/accountSecurity'], resolve)
    },{
      path: '/coupon',
      name: '优惠券',
      component: resolve => require(['@/components/user/coupon'], resolve)
    },{
      path: '/editingMaterials',
      name: '编辑资料',
      component: resolve => require(['@/components/user/editingMaterials'], resolve)
    },{
      path: '/evaluate',
      name: '评价',
      component: resolve => require(['@/components/user/evaluate'], resolve)
    },{
      path: '/feedback',
      name: '意见反馈',
      component: resolve => require(['@/components/user/feedback'], resolve)
    },{
      path: '/integral',
      name: '积分',
      component: resolve => require(['@/components/user/integral'], resolve)
    },{
      path: '/order',
      name: '订单中心',
      component: resolve => require(['@/components/user/order'], resolve)
    },{
      path: '/orderOk',
      name: '完成订单',
      component: resolve => require(['@/components/user/orderOk'], resolve)
    },{
      path: '/paymentSettings',
      name: '支付设置',
      component: resolve => require(['@/components/user/paymentSettings'], resolve)
    },{
      path: '/purchaseMember',
      name: '购买会员',
      component: resolve => require(['@/components/user/purchaseMember'], resolve)
    },{
      path: '/security',
      name: '安全中心',
      component: resolve => require(['@/components/user/security'], resolve)
    },{
      path: '/setting',
      name: '设置',
      component: resolve => require(['@/components/user/setting'], resolve)
    },{
      path: '/user',
      name: '会员中心',
      component: resolve => require(['@/components/user/user'], resolve)
    },
  ]
})
