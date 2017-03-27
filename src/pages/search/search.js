var app = getApp()
Page({
  data: {
    movies: [],
    title: 'abc',
    movieCount: 10,
    movieStart: 0,
    search: '',
    hasMore: false
  },
  onLoad: function() {
    console.log('search')
  },
  handleSearch: function(e) {
    // https://api.douban.com/v2/movie/search?q=恐怖
    if (!e.detail.value) {
      return
    }
    //清空数据
    this.setData({ movies: [], movieStart: 0, search: e.detail.value, hasMore: true, showLoading: false })
    this.getMovies();
  },
  getMovies: function() {
    let _this = this;
    app.wxfetch(app.URI + 'search', { data: { count: _this.data.movieCount, start: _this.data.movieStart, q: _this.data.search } })
      .then(res => {
        if (res.data.subjects.length) {
          _this.setData({ movies: _this.data.movies.concat(res.data.subjects), movieStart: _this.data.movieStart + 10 })
            //获得数据后显示加载提示
          _this.setData({ showLoading: true })
        } else {
          _this.setData({ hasMore: false })
        }
      })
  },
  handleLoadMore: function() {
    this.getMovies()
  }
})
