import axios from 'axios'
import { rapidApiHost, rapidApiBaseUrl, apiKey } from '@/constants'

const instance = axios.create()

const nbaApiRequest = async ({ ...rest }) => instance({
  method: 'GET',
  baseURL: rapidApiBaseUrl,
  headers: {
    'x-rapidapi-host': rapidApiHost,
    'x-rapidapi-key': apiKey,
  },
  ...rest,
})

export default nbaApiRequest
