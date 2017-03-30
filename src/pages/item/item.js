var app = getApp()

Page({
  data: {
    title: '',
    casts_num: 0,
    director_num: 0,
    loading: true,
    movie: {}
    // id: -1
  },
  onLoad: function(params) {
    //记录文章id，用于分享电影
    // this.setData({ id: params.id })
    wx.showToast(app.loadingConfig)
    let _this = this;
    // https://api.douban.com/v2/movie/subject/26309788
    app.wxfetch(app.URI + 'subject/' + params.id)
      .then(res => {
        _this.setData({ movie: res.data, casts_num: res.data.casts.length, director_num: res.data.directors.length })
      })
      .catch(e => {
        // 处理加载图标和设置title
        wx.showModal(app.modalConfig)
        console.log(e)
      }).
    finally(() => {
      wx.hideToast()
    })
  },
  onShareAppMessage: function() {
    let _this = this
    return {
      title: '小婷分享给您的电影' + _this.data.movie.title,
      path: '/pages/item/item?id=' + _this.data.movie.id,
      success: function(res) {
        // 分享成功
        wx.showToast({
          title: '分享成功'
        })
      },
      fail: function(res) {
        // 分享失败
        wx.showToast({
          title: '分享失败'
        })
      }
    }
  }
})
