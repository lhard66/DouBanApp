const Promise = require('./bluebird')

/**
 * @param  {String}	url	请求地址
 * @param  {String}	method  请求方式，默认get
 * @param  {Object} options	其它参数
 * @return {Promise} 
 */
module.exports = (options, url, method) => {
    return new Promise((resolve, reject) => {
      let params = {
        url,
        method,
        success: resolve,
        fail: reject
      }
      if (options) {
        params = Object.assign(params, options);
      }
      wx.request(params)
    })
  }
// module.exports = _wxfetch
