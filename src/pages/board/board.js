var app = getApp()

Page({
  data: {
    boards: [
      { key: 'in_theaters' },
      { key: 'coming_soon' },
      { key: 'top250' }
    ]
  },
  onLoad: function() {
    // var _this = this;
    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/in_theaters',
    //   data: {
    //     count: 3
    //   },
    //   header: {
    //     'content-type': 'json'
    //   },
    //   success: function(res) {

    //   }
    // })
    console.log(app.wxfetch)

    app.wxfetch({ header: { 'content-type': 'json' } }, 'https://api.douban.com/v2/movie/in_theaters', 'GET')
      .then(res => {
        console.log(res.data)
      })
  }
})
