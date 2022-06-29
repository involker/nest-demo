import axios from "axios";
import Qs from "qs";

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 20000;
axios.defaults.withCredentials = true;

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

/** 记录和显示错误 * */
/**
 * 拦截请求数据
 */
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  () => {
  }
);
axios.postApi = function (url, params, opts = {}) {
  return axios.post(url, Qs.stringify(params), opts);
};
axios.postJsonApi = function (url, params, opts = {}) {
  return axios.post(url, params, opts);
};
axios.postJson = function (url, params, opts = {}) {
  return axios.post(url, params, {
    headers: {
      "Content-Type": "application/json",
    },
    ...opts,
  });
};
axios.getApi = function (url, params, opts = {}) {
  return axios.get(url, { params: params, ...opts });
};
export default axios;
