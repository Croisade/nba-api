import nbaApiRequest from '@/utils/request'

export async function getSeasons() {
  // const nope = await nbaApiRequest()
  const { data } = await nbaApiRequest({ url: '/seasons/' })
  return data
}

export async function getLeagues() {
  const { data } = await nbaApiRequest({ url: '/leagues/' })
  return data
}
