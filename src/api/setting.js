import request from '@/utils/request'

export function getSettingList (parameter) {
  return request({
    url: '/' + parameter.name + '/index',
    method: 'get'
  })
}

export function updateSettingList (parameter) {
  return request({
    url: '/' + parameter.name + '/update',
    method: 'put',
    data: parameter
  })
}

export function getCatSlug (parameter) {
  return request({
    url: '/tool/getCatSlug',
    method: 'get',
    params: parameter
  })
}
