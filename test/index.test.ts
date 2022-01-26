import nock from 'nock'
import * as nbaApi from '../src/nbaApi'

// process.env.NBA_RAPID_API_KEY = '123'
describe('Nba-Api', () => {
  it.todo('Should throw if no environment variable is detected')
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

      const season = await nbaApi.getSeasons()
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

      const {
        api: { filters, leagues, message, results, status },
      } = await nbaApi.getLeagues()
      expect(filters).toEqual([])
      expect(leagues).toEqual(['africa', 'orlando', 'sacramento', 'standard', 'utah', 'vegas'])
      expect(message).toEqual('GET leagues/')
      expect(results).toEqual(6)
      expect(status).toEqual(200)
    })
  })

  describe('Teams', () => {})
  describe('Standings', () => {
    it('Should return standings from the 2021 year', async () => {
      nock('https://api-nba-v1.p.rapidapi.com:443', { encodedQueryParams: true })
        .get('/standings/standard/2018/')
        .reply(
          200,
          {
            api: {
              status: 200,
              message: 'GET standings/standard/2018',
              results: 30,
              filters: ['conference', 'division', 'teamId'],
              standings: [
                {
                  league: 'standard',
                  teamId: '1',
                  win: '29',
                  loss: '53',
                  gamesBehind: '31',
                  lastTenWin: '5',
                  lastTenLoss: '5',
                  streak: '3',
                  seasonYear: '2018',
                  conference: {
                    name: 'east',
                    rank: '12',
                    win: '16',
                    loss: '36',
                  },
                  division: {
                    name: 'southeast',
                    rank: '5',
                    win: '6',
                    loss: '10',
                    GamesBehind: '13',
                  },
                  winPercentage: '.354',
                  lossPercentage: '.646',
                  home: { win: '17', loss: '24' },
                  away: { win: '12', loss: '29' },
                  winStreak: '0',
                  tieBreakerPoints: '',
                },
                {
                  league: 'standard',
                  teamId: '5',
                  win: '39',
                  loss: '43',
                  gamesBehind: '21',
                  lastTenWin: '6',
                  lastTenLoss: '4',
                  streak: '1',
                  seasonYear: '2018',
                  conference: {
                    name: 'east',
                    rank: '9',
                    win: '29',
                    loss: '23',
                  },
                  division: {
                    name: 'southeast',
                    rank: '2',
                    win: '10',
                    loss: '6',
                    GamesBehind: '3',
                  },
                  winPercentage: '.476',
                  lossPercentage: '.524',
                  home: { win: '25', loss: '16' },
                  away: { win: '14', loss: '27' },
                  winStreak: '0',
                  tieBreakerPoints: '',
                },
              ],
            },
          },
          [],
        )

      const input = nbaApi.Leagues.standard

      const {
        api: { status, standings },
      } = await nbaApi.getStandings('2018', input)
      expect(status).toEqual(200)
      expect(standings).toBeDefined()
    })
  })
})
