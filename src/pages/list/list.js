var app = getApp()

Page({
  data: {
    movies: {},
    movieCount: 10
  },
  onLoad: function(params) {
    let _this = this
    let type = params.type
    let start = 0
    this.getMovies(type, start)
  },
  getMovies: function(movieType, movieStart) {
    let _this = this
    app.wxfetch(app.URI + movieType, { data: { count: _this.movieCount, start: movieStart } })
      .then(res => {
        _this.setData({ movies: res.data })
      })
  }
})
