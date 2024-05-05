import axios from 'axios'

const request = (url: string) => {
  return axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
  })
}

export default request
