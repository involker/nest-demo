import axios from "axios";
import Qs from "qs";
import { Message } from "@arco-design/web-vue"

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
    const token = window.localStorage.getItem("token");
    config.headers = {
      Authorization:`Bearer ${token}`
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// response 拦截器
axios.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data.rspCode === "success") {
      return data;
    } else {
      Message.error(data.rspDesc)
    }
  },
  (error) => {
    console.log(error);
    Message.error(error.message)
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
