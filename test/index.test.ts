import nock from 'nock'
import { getLeagues, getSeasons } from '../src/nbaApi'

describe('Seasons', () => {
  it('Should return a seasons object', async () => {
    nock('https://api-nba-v1.p.rapidapi.com:443', { encodedQueryParams: true })
      .get('/seasons/')
      .reply(
        200,
        {
          api: {
            status: 200,
            message: 'GET seasons/',
            results: 7,
            filters: [],
            seasons: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
          },
        },
        [],
      )

    const season = await getSeasons()
    expect(season).toEqual({
      api: {
        filters: [],
        message: 'GET seasons/',
        results: 7,
        seasons: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        status: 200,
      },
    })
  })
})

describe('Leagues', () => {
  it('Should return a league object', async () => {
    nock('https://api-nba-v1.p.rapidapi.com:443', { encodedQueryParams: true })
      .get('/leagues/')
      .reply(
        200,
        {
          api: {
            status: 200,
            message: 'GET leagues/',
            results: 6,
            filters: [],
            leagues: ['africa', 'orlando', 'sacramento', 'standard', 'utah', 'vegas'],
          },
        },
        [],
      )

    const season = await getLeagues()
    expect(season).toEqual({
      api: {
        filters: [],
        leagues: ['africa', 'orlando', 'sacramento', 'standard', 'utah', 'vegas'],
        message: 'GET leagues/',
        results: 6,
        status: 200,
      },
    })
  })
})
