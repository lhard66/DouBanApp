const Promise = require('../../utils/bluebird.js')

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
    wx.showToast(app.loadingConfig)
    let _this = this;
    let board_promise = this.data.boards.map(board => {
      return app.wxfetch(app.URI + board.key, { data: { count: 6 } }).then(res => {
        board.title = res.data.title
        board.movies = res.data.subjects
        return board
      })
    })
    Promise.all(board_promise).then(boards => {
      _this.setData({ boards: boards })
      wx.hideToast()
    })
  },
  onPullDownRefresh: function() {
    console.log('push')
    wx.stopPullDownRefresh()
  }
})
