var app = getApp()

Page({
  data: {
    movies: [],
    movieCount: 10, //访问一次网络请求的数据条数
    movieStart: 0,
    movieType: '',
    hasMore: true
  },
  onLoad: function(params) {
    let _this = this
    if (!params.type) {
      //网络参数有误，需要提醒用户
    }
    let type = params.type || 'in_theaters'
    this.getMovies(type, 0)
    this.setData({ movieType: type })
  },
  getMovies: function(movieType, movieStart) {
    let _this = this
    app.wxfetch(app.URI + movieType, { data: { count: _this.data.movieCount, start: _this.data.movieStart } })
      .then(res => {
        if (res.data.subjects.length) {
          _this.setData({ movies: _this.data.movies.concat(res.data.subjects), movieStart: _this.data.movieStart + 10 })
        } else {
          _this.setData({ hasMore: false })
        }
      })
  },
  handleLoadMore: function(e) {
    this.getMovies(this.data.movieType, this.data.movieStart)
  }
})
