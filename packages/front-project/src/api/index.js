import request from "@/request"

export function login(params) {
  return request.post('/auth/login', params);
}
export function getCurrentUser(params) {
  return request.post('/getCurrentUser', params);
}
export function getUserList(params) {
  return request.post('/user/query', params);
}
export function delUser(params) {
  return request.post('/user/del', params);
}
export function addUser(params) {
  return request.post('/user/add', params);
}
export function updateUser(params) {
  return request.post('/user/update', params);
}
export function getUserDetail(params) {
  return request.post('/user/detail', params);
}
export function uploadImage(params) {
  return request.post("/upload", params, {
    contentType: "multipart/form-data"
  });
}