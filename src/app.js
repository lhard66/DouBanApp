const wxfetch = require('./utils/wxfetch.js')
const URI = 'https://api.douban.com/v2/movie/'
const loadingConfig = {
  title: '加载中',
  icon: 'loading',
  mask: 'true',
  duration: 10000
}
const modalConfig = {
  title: '网络错误',
  content: '请检查网络是否正常连接，再次打开页面重试。',
  showCancel: false,
  complete: function() {
    //退出小程序
    console.log('wechat exit')
  }
}
App({
  wxfetch,
  URI,
  loadingConfig,
  modalConfig
})
