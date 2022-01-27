import axios from 'axios'
import { rapidApiHost, rapidApiBaseUrl } from '../constants'

const instance = axios.create()

const nbaApiRequest = async ({ ...rest }) => {
  let key
  if (process.env.NBA_RAPID_API_KEY === undefined) {
    key = process.env.REACT_APP_NBA_RAPID_API
  }
  if (key === undefined) {
    throw new Error('Missing environment variable REACT_APP_NBA_RAPID_API_KEY')
  }

  return instance({
    method: 'GET',
    baseURL: rapidApiBaseUrl,
    headers: {
      'x-rapidapi-host': rapidApiHost,
      'x-rapidapi-key': key,
    },
    ...rest,
  })
}

export default nbaApiRequest
