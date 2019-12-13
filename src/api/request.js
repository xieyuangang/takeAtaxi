import axios from 'axios'

axios.defaults.baseURL = localStorage.getItem('url'); // 正式库

axios.interceptors.request.use(
  config => {
      return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios
