var app = getApp()

Page({
  data: {
    title: '',
    casts_num: 0,
    director_num: 0,
    loading: true,
    movie: {}
  },
  onLoad: function(params) {
    wx.showToast(app.loadingConfig)
    let _this = this;
    // https://api.douban.com/v2/movie/subject/26309788
    app.wxfetch(app.URI + 'subject/' + params.id)
      .then(res => {
        _this.setData({ movie: res.data, casts_num: res.data.casts.length, director_num: res.data.directors.length })
      })
      .catch(e => {
        // 处理加载图标和设置title
        console.log(e)
      }).
      finally(()=>{
        wx.hideToast()
      })
  }
})
