var app = getApp()

Page({
  data: {
    movies: [],
    movieCount: 10, //访问一次网络请求的数据条数
    movieStart: 0,
    movieType: '',
    hasMore: true,
    showLoading: false,
    shaking: false //防止抖动，频繁加载数据。
  },
  onLoad: function(params) {
    wx.showToast(app.loadingConfig)
    let _this = this
    if (!params.type) {
      //网络参数有误，需要提醒用户
      let config = app.modalConfig;
      config.content = '参数有误，请退出小程序重新打开'
      wx.showModal(config)
      return;
    }
    this.getMovies(params.type)
    this.setData({ movieType: params.type })
  },
  getMovies: function(movieType) {
    let _this = this
    app.wxfetch(app.URI + movieType, { data: { count: _this.data.movieCount, start: _this.data.movieStart } })
      .then(res => {
        if (res.data.subjects.length) {
          _this.setData({ movies: _this.data.movies.concat(res.data.subjects), movieStart: _this.data.movieStart + 10 })          
          //取消抖动状态
          _this.setData({ shaking: false })
          //获得数据后显示加载提示
          _this.setData({ showLoading: true })
        } else {
          _this.setData({ hasMore: false })
        }
      })
      .catch(e => {
        console.log(app.modalConfig)
        wx.showModal(app.modalConfig)
      })
      .finally(() => {
        wx.hideToast()
      })
  },
  //拉至最底端时会触发此方法
  handleLoadMore: function(e) {
    //不显示屏幕中间的加载提示。
    // wx.showToast(app.loadingConfig)
    if(this.data.shaking){
      return;
    }
    this.setData({ shaking: true })    
    this.getMovies(this.data.movieType, this.data.movieStart)    
    // setTimeout(function() {
    //   _this.setData({ shaking: false })
    // }, 3000)    
  }
})
