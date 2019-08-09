import util from './/util' // 此处，引入存放对promise处理的文件
 
const ip = 'http://localhost:4000'  // 后台的ip地址
const getRequest = util.httpsPromisify(wx.request)
 
const request = (method, url, data = {}) => { // method为请求方法，url为接口路径，data为传参
  return getRequest({
    url: ip+url,
    data: data,
    method: method,
    header: {
      'content-type': 'application/json'
    }
  })
}
 
export default {
  // 接口
  getGoods: params => request('get', "http://localhost:3000/course", params),
  // 例子 
   }