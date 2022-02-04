import nock from 'nock'
import * as nbaApi from '../src/nbaApi'

describe('Nba-Api', () => {
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
        api: {
          filters, leagues, message, results, status,
        },
      } = await nbaApi.getLeagues()
      expect(filters).toEqual([])
      expect(leagues).toEqual(['africa', 'orlando', 'sacramento', 'standard', 'utah', 'vegas'])
      expect(message).toEqual('GET leagues/')
      expect(results).toEqual(6)
      expect(status).toEqual(200)
    })
  })

  describe('Teams', () => {
    it('Should return teams by division name', async () => {
      nock('https://api-nba-v1.p.rapidapi.com:443', { encodedQueryParams: true })
        .get('/teams/divName/Atlantic')
        .reply(200, {
          api: {
            status: 200,
            message: 'GET teams/divName/Atlantic',
            results: 5,
            filters: ['teamId', 'league', 'city', 'shortName', 'nickName', 'confName', 'divName'],
            teams: [{
              city: 'Boston',
              fullName: 'Boston Celtics',
              teamId: '2',
              nickname: 'Celtics',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png',
              shortName: 'BOS',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'East', divName: 'Atlantic' }, vegas: { confName: 'East', divName: 'Atlantic' }, utah: { confName: 'East', divName: 'Atlantic' }, sacramento: { confName: 'East', divName: 'Atlantic' },
              },
            }, {
              city: 'Brooklyn',
              fullName: 'Brooklyn Nets',
              teamId: '4',
              nickname: 'Nets',
              logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/130px-Brooklyn_Nets_newlogo.svg.png',
              shortName: 'BKN',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'East', divName: 'Atlantic' }, vegas: { confName: 'East', divName: 'Atlantic' }, utah: { confName: 'East', divName: 'Atlantic' }, sacramento: { confName: 'East', divName: 'Atlantic' },
              },
            }, {
              city: 'New York',
              fullName: 'New York Knicks',
              teamId: '24',
              nickname: 'Knicks',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/d/dc/NY_Knicks_Logo_2011.png',
              shortName: 'NYK',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'East', divName: 'Atlantic' }, vegas: { confName: 'East', divName: 'Atlantic' }, utah: { confName: 'East', divName: 'Atlantic' }, sacramento: { confName: 'East', divName: 'Atlantic' },
              },
            }, {
              city: 'Philadelphia',
              fullName: 'Philadelphia 76ers',
              teamId: '27',
              nickname: '76ers',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/4/48/76ers_2016.png',
              shortName: 'PHI',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'East', divName: 'Atlantic' }, vegas: { confName: 'East', divName: 'Atlantic' }, utah: { confName: 'East', divName: 'Atlantic' }, sacramento: { confName: 'East', divName: 'Atlantic' },
              },
            }, {
              city: 'Toronto',
              fullName: 'Toronto Raptors',
              teamId: '38',
              nickname: 'Raptors',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png',
              shortName: 'TOR',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'East', divName: 'Atlantic' }, vegas: { confName: 'East', divName: 'Atlantic' }, utah: { confName: 'East', divName: 'Atlantic' }, sacramento: { confName: 'East', divName: 'Atlantic' },
              },
            }],
          },
        }, [])

      const { api: { teams } } = await nbaApi.getTeamsByDivName(nbaApi.Division.Atlantic)
      expect(teams.length).toEqual(5)
    })

    it('Should return teams by conference name', async () => {
      nock('https://api-nba-v1.p.rapidapi.com:443', { encodedQueryParams: true })
        .get('/teams/confName/west')
        .reply(200, {
          api: {
            status: 200,
            message: 'GET teams/confName/west',
            results: 18,
            filters: ['teamId', 'league', 'city', 'shortName', 'nickName', 'confName', 'divName'],
            teams: [{
              city: 'Dallas',
              fullName: 'Dallas Mavericks',
              teamId: '8',
              nickname: 'Mavericks',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/b8/Mavericks_de_Dallas_logo.svg/150px-Mavericks_de_Dallas_logo.svg.png',
              shortName: 'DAL',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Southwest' }, vegas: { confName: 'West', divName: 'Southwest' }, utah: { confName: 'West', divName: 'Southwest' }, sacramento: { confName: 'West', divName: 'Southwest' },
              },
            }, {
              city: 'Denver',
              fullName: 'Denver Nuggets',
              teamId: '9',
              nickname: 'Nuggets',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Nuggets_de_Denver_2018.png/180px-Nuggets_de_Denver_2018.png',
              shortName: 'DEN',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Northwest' }, vegas: { confName: 'West', divName: 'Northwest' }, utah: { confName: 'West', divName: 'Northwest' }, sacramento: { confName: 'West', divName: 'Northwest' },
              },
            }, {
              city: 'Golden State',
              fullName: 'Golden State Warriors',
              teamId: '11',
              nickname: 'Warriors',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/1200px-Warriors_de_Golden_State_logo.svg.png',
              shortName: 'GSW',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Pacific' }, sacramento: { confName: 'West', divName: 'Pacific' }, vegas: { confName: 'West', divName: 'Pacific' }, utah: { confName: 'West', divName: 'Pacific' },
              },
            }, {
              city: 'Houston',
              fullName: 'Houston Rockets',
              teamId: '14',
              nickname: 'Rockets',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Houston_Rockets_logo_2003.png/330px-Houston_Rockets_logo_2003.png',
              shortName: 'HOU',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Southwest' }, vegas: { confName: 'West', divName: 'Southwest' }, utah: { confName: 'West', divName: 'Southwest' }, sacramento: { confName: 'West', divName: 'Southwest' },
              },
            }, {
              city: 'LA',
              fullName: 'LA Clippers',
              teamId: '16',
              nickname: 'Clippers',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/d/d6/Los_Angeles_Clippers_logo_2010.png',
              shortName: 'LAC',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Pacific' }, vegas: { confName: 'West', divName: 'Pacific' }, utah: { confName: 'West', divName: 'Pacific' }, sacramento: { confName: 'West', divName: 'Pacific' },
              },
            }, {
              city: 'Los Angeles',
              fullName: 'Los Angeles Lakers',
              teamId: '17',
              nickname: 'Lakers',
              logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png',
              shortName: 'LAL',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Pacific' }, sacramento: { confName: 'West', divName: 'Pacific' }, vegas: { confName: 'West', divName: 'Pacific' }, utah: { confName: 'West', divName: 'Pacific' },
              },
            }, {
              city: 'Memphis',
              fullName: 'Memphis Grizzlies',
              teamId: '19',
              nickname: 'Grizzlies',
              logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png',
              shortName: 'MEM',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Southwest' }, vegas: { confName: 'West', divName: 'Southwest' }, utah: { confName: 'West', divName: 'Southwest' }, sacramento: { confName: 'West', divName: 'Southwest' },
              },
            }, {
              city: 'Minnesota',
              fullName: 'Minnesota Timberwolves',
              teamId: '22',
              nickname: 'Timberwolves',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d9/Timberwolves_du_Minnesota_logo_2017.png/200px-Timberwolves_du_Minnesota_logo_2017.png',
              shortName: 'MIN',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Northwest' }, vegas: { confName: 'West', divName: 'Northwest' }, utah: { confName: 'West', divName: 'Northwest' }, sacramento: { confName: 'West', divName: 'Northwest' },
              },
            }, {
              city: 'New Orleans',
              fullName: 'New Orleans Pelicans',
              teamId: '23',
              nickname: 'Pelicans',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/2/21/New_Orleans_Pelicans.png/200px-New_Orleans_Pelicans.png',
              shortName: 'NOP',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Southwest' }, vegas: { confName: 'West', divName: 'Southwest' }, utah: { confName: 'West', divName: 'Southwest' }, sacramento: { confName: 'West', divName: 'Southwest' },
              },
            }, {
              city: 'Oklahoma City',
              fullName: 'Oklahoma City Thunder',
              teamId: '25',
              nickname: 'Thunder',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Thunder_d%27Oklahoma_City_logo.svg/1200px-Thunder_d%27Oklahoma_City_logo.svg.png',
              shortName: 'OKC',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Northwest' }, vegas: { confName: 'West', divName: 'Northwest' }, utah: { confName: 'West', divName: 'Northwest' }, sacramento: { confName: 'West', divName: 'Northwest' },
              },
            }, {
              city: 'Phoenix',
              fullName: 'Phoenix Suns',
              teamId: '28',
              nickname: 'Suns',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/5/56/Phoenix_Suns_2013.png',
              shortName: 'PHX',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Pacific' }, vegas: { confName: 'West', divName: 'Pacific' }, utah: { confName: 'West', divName: 'Pacific' }, sacramento: { confName: 'West', divName: 'Pacific' },
              },
            }, {
              city: 'Portland',
              fullName: 'Portland Trail Blazers',
              teamId: '29',
              nickname: 'Trail Blazers',
              logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png',
              shortName: 'POR',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Northwest' }, vegas: { confName: 'West', divName: 'Northwest' }, utah: { confName: 'West', divName: 'Northwest' }, sacramento: { confName: 'West', divName: 'Northwest' },
              },
            }, {
              city: 'Sacramento',
              fullName: 'Sacramento Kings',
              teamId: '30',
              nickname: 'Kings',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png',
              shortName: 'SAC',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Pacific' }, sacramento: { confName: 'West', divName: 'Pacific' }, vegas: { confName: 'West', divName: 'Pacific' }, utah: { confName: 'West', divName: 'Pacific' },
              },
            }, {
              city: 'San Antonio',
              fullName: 'San Antonio Spurs',
              teamId: '31',
              nickname: 'Spurs',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/0/0e/San_Antonio_Spurs_2018.png',
              shortName: 'SAS',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Southwest' }, vegas: { confName: 'West', divName: 'Southwest' }, utah: { confName: 'West', divName: 'Southwest' }, sacramento: { confName: 'West', divName: 'Southwest' },
              },
            }, {
              city: 'Team',
              fullName: 'Team LeBron',
              teamId: '35',
              nickname: 'Team LeBron',
              logo: '',
              shortName: 'LBN',
              allStar: '1',
              nbaFranchise: '0',
              leagues: {
                standard: { confName: 'West', divName: 'West' }, vegas: { confName: 'West', divName: 'West' }, utah: { confName: 'West', divName: 'West' }, sacramento: { confName: 'West', divName: 'West' },
              },
            }, {
              city: 'Utah',
              fullName: 'Utah Jazz',
              teamId: '40',
              nickname: 'Jazz',
              logo: 'https://upload.wikimedia.org/wikipedia/fr/3/3b/Jazz_de_l%27Utah_logo.png',
              shortName: 'UTA',
              allStar: '0',
              nbaFranchise: '1',
              leagues: {
                standard: { confName: 'West', divName: 'Northwest' }, vegas: { confName: 'West', divName: 'Northwest' }, utah: { confName: 'West', divName: 'Northwest' }, sacramento: { confName: 'West', divName: 'Northwest' },
              },
            }, {
              city: 'Utah',
              fullName: 'Utah Blue',
              teamId: '102',
              nickname: 'Jazz',
              logo: '',
              shortName: 'UTB',
              allStar: '0',
              nbaFranchise: '0',
              leagues: {
                vegas: { confName: 'West', divName: 'Northwest' }, standard: { confName: 'West', divName: 'Northwest' }, utah: { confName: 'West', divName: 'Northwest' }, sacramento: { confName: 'West', divName: 'Northwest' },
              },
            }, {
              city: 'Utah',
              fullName: 'Utah White',
              teamId: '103',
              nickname: 'Jazz',
              logo: '',
              shortName: 'UTW',
              allStar: '0',
              nbaFranchise: '0',
              leagues: {
                vegas: { confName: 'West', divName: 'Northwest' }, standard: { confName: 'West', divName: 'Northwest' }, utah: { confName: 'West', divName: 'Northwest' }, sacramento: { confName: 'West', divName: 'Northwest' },
              },
            }],
          },
        }, [

        ])

      const { api: { teams } } = await nbaApi.getTeamsByConfName(nbaApi.Conference.west)
      expect(teams.length).toEqual(18)
    })

    it('Shoudl return teams by nickname', async () => {
      const { api: { teams } } = await nbaApi.getTeamsByNickName()
      expect(teams.length).toEqual(1)
    })
  })
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

  it.todo('Should throw if no environment variable is detected')
})
