//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    console.log('bindViewTap');
    console.log('hello ltq,ht.');
  },
  onLoad: function() {    
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',       
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  }
})
