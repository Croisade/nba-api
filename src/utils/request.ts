import axios from 'axios'
import { rapidApiHost, rapidApiBaseUrl } from '../constants'

const instance = axios.create()

const nbaApiRequest = async ({ ...rest }) => {
  if (typeof process.env.NBA_RAPID_API_KEY !== 'string') {
    throw new Error('Missing environment variable NBA_RAPID_API_KEY')
  }

  return instance({
    method: 'GET',
    baseURL: rapidApiBaseUrl,
    headers: {
      'x-rapidapi-host': rapidApiHost,
      'x-rapidapi-key': process.env.NBA_RAPID_API_KEY,
    },
    ...rest,
  })
}

export default nbaApiRequest
