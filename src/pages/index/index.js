//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    boards: [
      { key: 'in_theaters' },
      { key: 'coming_soon' },
      { key: 'top250' }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    console.log('bindViewTap');
    console.log('hello ltq,ht.');
  },
  onLoad: function() {
    var _this = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      data: {
        count: 3
      },
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        // console.log(res.data);
        // _this.data.boards.setData({url:'143912755726.jpg'});
        _this.setData({ 'boards[0].title': res.data.title });
        _this.setData({ 'boards[0].movies': res.data.subjects });
        // _this.setData({ boards:'123' });
        console.log(_this.data.boards[0].key);
        return _this.data.boards;
      }
    })
  }
})
