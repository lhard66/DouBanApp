var app = getApp()

Page({
  data: {
    movies: [],
    movieCount: 10, //访问一次网络请求的数据条数
    movieStart: 0,
    movieType: '',
    hasMore: true,
    showLoading: false
  },
  onLoad: function(params) {
    wx.showToast(app.loadingConfig)
    let _this = this
    if (!params.type) {
      //网络参数有误，需要提醒用户
    }
    let type = params.type || 'in_theaters'
    this.getMovies(type, 0)
    this.setData({ movieType: type })
  },
  getMovies: function(movieType) {
    let _this = this
    app.wxfetch(app.URI + movieType, { data: { count: _this.data.movieCount, start: _this.data.movieStart } })
      .then(res => {
        if (res.data.subjects.length) {
          _this.setData({ movies: _this.data.movies.concat(res.data.subjects), movieStart: _this.data.movieStart + 10 })
            //获得数据后显示加载提示
          _this.setData({ showLoading: true })
        } else {
          _this.setData({ hasMore: false })
        }        
      })
      .catch(e=>{
        console.log(e)
      })
      .finally(()=>{
        wx.hideToast()
      })
  },
  //拉至最底端时会触发此方法
  handleLoadMore: function(e) {
    //不显示屏幕中间的加载提示。
    // wx.showToast(app.loadingConfig)
    this.getMovies(this.data.movieType, this.data.movieStart)
  }
})
