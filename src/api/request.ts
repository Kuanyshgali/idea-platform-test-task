import axios from 'axios'

import { URL_HOST } from '@app/constants/Endpoint'

const request = () => {
  return axios.create({
    baseURL: URL_HOST,
    headers: { 'Content-Type': 'application/json' },
  })
}

export default request
