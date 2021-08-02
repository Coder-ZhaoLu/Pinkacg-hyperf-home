import request from '@/utils/request'

const api = {
  uploadAvatarImg: '/user/user_update_avatar',
  uploadImgFile: '/upload/upload_img'
}

export default api

export function uploadImgFile (parameter) {
  console.log(parameter)
  return request({
    url: api.uploadImgFile,
    method: 'post',
    data: parameter
  })
}

export function uploadAvatarImg (parameter) {
  return request({
    url: api.uploadAvatarImg + '/' + parameter.id,
    method: 'put',
    data: parameter
  })
}
