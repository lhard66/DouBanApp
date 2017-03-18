//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World'    
  },
  //事件处理函数
  bindViewTap: function() {
    console.log('bindViewTap');
    console.log('hello ltq,ht.');
  },
  onLoad: function () {
    console.log('index onLoad');
  }
})
