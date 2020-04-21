import {
  BASE_URL,
  TIMEOUT
} from './config.js'

export default function (options) {
  return new Promise((reslove, reject) => {
    wx.request({
      header: options.header || {},
      url: BASE_URL + options.url,
      method: options.method || 'get',
      data: options.data || {},
      // timeout: TIMEOUT,
      success({
        statusCode,
        data
      }) {
        if (statusCode == 200 && data.code === -1) {
          const app = getApp()
          app.outLogin()
        } else {
          reslove(data)
        }
      },
      fail: reject
    })
  })
}