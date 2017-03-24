var app = getApp()

Page({
  data: {
  	title:'',
    loading: true,
    movie: {}
  },
  onLoad: function() {
    let testId = '26309788'
    let _this = this;
    // https://api.douban.com/v2/movie/subject/26309788
    app.wxfetch(app.URI + 'subject/' + testId)
      .then(res => {
        _this.setData({ movie: res.data })
      })
      .catch(e=>{
      	// 处理加载图标和设置title
      	console.log(e)
      })
  }
})
