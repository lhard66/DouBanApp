//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    boards: {url:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'}
  },
  //事件处理函数
  bindViewTap: function() {
    console.log('bindViewTap');
    console.log('hello ltq,ht.');
  },
  onLoad: function() {
    var _this=this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      data: {
        count: 3
      },
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        console.log(res.data);
        // _this.data.boards.setData({url:'143912755726.jpg'});
        _this.setData({boards:'123'});
        console.log(_this.data.boards);
        return _this.data.boards;
      }
    })
  }
})
