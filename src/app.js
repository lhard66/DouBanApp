//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    console.log('应用全局载入事件');
  },
  getUserInfo:function(cb){
    console.log('全局函数!');
  },
  globalData:{
    userInfo:'ltq1238888888'
  }
})