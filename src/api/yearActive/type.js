import request from '@/api/request'

import api from '@/api/api'


// advertise = '/advertise' //广告服务
// admin = '/admin' //用户服务
// sharing = '/sharing' //分享服务
// wallet = '/wallet' //钱包服务
// common = '/common' //公共服务
// sharingMigrate = '/sharing-migrate' //包含钱包和分账（服务）

console.log(api);


export function getImgNew() {
  return request({
    url: api.advertise + '/activitiess/yearInitialize',
    method: 'get',
  })
}


export function getTicktListNew() {
  return request({
    url: api.advertise + '/activitiess/yearProductList',
    method: 'get'
  })
}



export function getPhoneNumberNew({
  type,
  jso
}) {
  const data = {
    type, //类型
  }
  return request({
    url: api.admin + '/messages/message',
    method: 'get',
    params: data
  })
}
