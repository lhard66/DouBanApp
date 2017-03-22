const wxfetch = require('./utils/wxfetch.js')
const URI = 'https://api.douban.com/v2/movie'

App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    console.log('应用全局载入事件---ltq')
  },
  wxfetch: wxfetch
})
