import request from "@/request"

export function getUserList(params){
  return request.post('/user/query',params);
}
export function delUser(params){
  return request.post('/user/del',params);
}
export function addUser(params){
  return request.post('/user/add',params);
}
export function updateUser(params){
  return request.post('/user/update',params);
}
export function getUserDetail(params){
  return request.post('/user/detail',params);
}