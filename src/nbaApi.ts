/* eslint-disable max-len */
import nbaApiRequest from './utils/request'

export enum Conference {
  east = 'east',
  west = 'west',
}

export enum Year {
  twentyFifteen = '2015',
  twentySixteen = '2016',
  twentySeventeen = '2017',
  twentyEighteen = '2018',
  twentyNineteen = '2019',
  twentyTwenty = '2020',
  twentyTwentyOne = '2021',
}

export enum Division {
  Southeast = 'Southeast',
  Central = 'Central',
  Atlantic = 'Atlantic',
  Northwest = 'Northwest',
  Pacific = 'Pacific',
  Southwest = 'Southwest',
}

export enum Leagues {
  standard = 'standard',
  africa = 'africa',
  sacramento = 'sacramento',
  vegas = 'vegas',
  utah = 'utah',
  orlando = 'orlando',
}

export enum NickName {
  grizzlies = 'Grizzlies',
  lakers = 'Lakers',
  mavericks = 'Mavericks',
  nuggets = 'Nuggets',
  warriors = 'Warriors',
  rockets = 'Rockets',
  clippers = 'Clippers',
  timberwolves = 'Timberwolves',
  pelicans = 'Pelicans',
  thunder = 'Thunder',
  suns = 'Suns',
  trailBlazers = 'Trail Blazers',
  kings = 'Kings',
  spurs = 'Spurs',
  jazz = 'Jazz',
  utb = 'Jazz',
  utw = 'Jazz',
  lbn = 'Team Lebron',
  hawks = 'Hawks',
  celtics = 'Celtics',
  nets = 'Nets',
  hornets = 'Hornets',
  bulls = 'Bulls',
  cavaliers = 'Cavaliers',
  pistons = 'Pistons',
  pacers = 'Pacers',
  heat = 'Heat',
  bucks = 'Bucks',
  knicks = 'Knicks',
  magic = 'Magic',
  sixers = '76ers',
  durant = 'Team Durant',
  wilbon = 'Team Wilbon',
  stephenA = 'Team Stephen A',
  raptors = 'Raptors',
  usa = 'USA',
  wizards = 'Wizards',
  world = ' World',
}

export enum ShortName {
  suns = 'PHX',
  grizzlies = 'MEM',
  lakers = 'LAL',
  mavericks = 'DAL',
  nuggets = 'DEN',
  warriors = 'GSW',
  rockets = 'HOU',
  clippers = 'LAC',
  timberwolves = 'MIN',
  pelicans = 'NOP',
  thunder = 'OKC',
  trailBlazers = 'POR',
  kings = 'SAC',
  spurs = 'SAS',
  jazz = 'UTA',
  utb = 'UTB',
  utw = 'UTW',
  lebron = 'LBN',
  hawks = 'ATL',
  celtics = 'BOS',
  nets = 'BKN',
  hornets = 'CHA',
  bulls = 'CHI',
  cavaliers = 'CLE',
  pistons = 'DET',
  pacers = 'IND',
  heat = 'MIA',
  bucks = 'MIL',
  knicks = 'NYK',
  magic = 'ORL',
  sixers = 'PHI',
  durant = 'DRT',
  wilbon = 'WLB',
  stephenA = 'SAS',
  raptors = 'TOR',
  usa = 'USA',
  wizards = 'WAS',
  world = ' WLD',
}

export enum TeamId {
  mavericks = '8',
  nuggets = '9',
  warriors = '11',
  rockets = '14',
  clippers = '16',
  lakers = '17',
  grizzlies = '19',
  timberwolves = '22',
  pelicans = '23',
  thunder = '25',
  suns = '28',
  trailBlazers = '29',
  kings = '30',
  spurs = '31',
  lebron = '35',
  jazz = '40',
  utb = '102',
  utw = '103',
  hawks = '1',
  celtics = '2',
  nets = '4',
  hornets = '5',
  bulls = "6'",
  cavaliers = '7',
  pistons = '10',
  pacers = '15',
  heat = '20',
  bucks = '21',
  knicks = '24',
  magic = '26',
  sixers = '27',
  durant = '34',
  away = '36',
  home = '37',
  raptors = '38',
  usa = '39',
  wizards = '41',
  world = '42',
}

export enum City {
  mavericks = 'Dallas',
  nuggets = 'Denver',
  warriors = 'Golden State',
  rockets = 'Houston',
  clippers = 'LA',
  lakers = 'Los Angeles',
  grizzlies = 'Memphis',
  timberwolves = 'Minnesota',
  pelicans = 'New Orleans',
  thunder = 'Oklahoma City',
  suns = 'Phoenix',
  trailBlazers = 'Portland',
  kings = 'Sacramento',
  spurs = 'San Antonio',
  lebron = 'Team',
  jazz = 'Utah',
  utb = 'Utah',
  utw = 'Utah',
  hawks = 'Atlanta',
  celtics = 'Boston',
  nets = 'Brooklyn',
  hornets = 'Charlotte',
  bulls = 'Chicago',
  cavaliers = 'Cleveland',
  pistons = 'Detroit',
  pacers = 'Indiana',
  heat = 'Miami',
  bucks = 'Milwaukee',
  knicks = 'New York',
  magic = 'Orlando',
  sixers = 'Philadelphia',
  durant = 'Team',
  away = 'Away',
  home = 'Home',
  raptors = 'Toronto',
  usa = 'USA',
  wizards = 'Washington',
  world = 'World',
}

export interface Base {
  api: {
    status: string
    message: string
    results: number
    filters: string[]
  }
}
export interface TeamsData {
  city: string
  fullName: string
  teamId: string
  nickname: string
  logo: string
  shortName: string
  allStar: string
  nbaFranchise: string
  leagues: {
    standard?: {
      confName: Conference
      divName: Division
    }
    vegas?: {
      confName: Conference
      divName: Division
    }
    sacramento?: {
      confName: Conference
      divName: Division
    }
    utah?: {
      confName: Conference
      divName: Division
    }
    orlando?: {
      confName: Conference
      divName: Division
    }
    africa?: {
      confName: Conference
      divName: Division
    }
  }
}

export interface StandingsData {
  league: Leagues
  teamId: string
  win: string
  loss: string
  gamesBehind: string
  lastTenWin: string
  lastTenLoss: string
  streak: string
  seasonYear: string
  conference: {
    name: Conference
    rank: string
    win: string
    loss: string
  }
  division: {
    name: Division
    rank: string
    win: string
    loss: string
    GamesBehind: string
  }
  winPercentage: string
  lossPercentage: string
  home: {
    win: string
    loss: string
  }
  away: {
    win: string
    loss: string
  }
  winStreak: string
  tieBreakerPoints: string
}

export interface Standings extends Base {
  api: Base['api'] & {
    standings: StandingsData[]
  }
}

export interface Season extends Base {
  api: Base['api'] & {
    seasons: string[]
  }
}

export interface League extends Base {
  api: Base['api'] & {
    leagues: Leagues[]
  }
}

export interface Teams extends Base {
  api: Base['api'] & {
    teams: TeamsData[]
  }
}

/**
 * The GET /seasons call allows your platform to receive an object containing all available seasons.
 * @summary Get all available seasons
 * @throws {AxiosError}
 */
export async function getSeasons(): Promise<Season> {
  const { data } = await nbaApiRequest({ url: '/seasons/' })
  return data
}
/**
 * The GET /seasons call allows your platform to receive an object containing all available leagues.
 * @summary Get all available leagues
 * @throws {AxiosError}
 */
export async function getLeagues(): Promise<League> {
  const { data } = await nbaApiRequest({ url: '/leagues/' })
  return data
}
/**
 * The GET /teams/divName/{divisionName} call allows your platform to receive an object containing all available teams by division.
 * @summary Get teams by division name
 * @throws {AxiosError}
 */
export async function getTeamsByDivName(divisionName: Division): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/divName/${divisionName}` })
  return data
}
/**
 * The GET /teams/divName/{conferenceName} call allows your platform to receive an object containing all available teams by division.
 * @summary Get teams by conference name
 * @throws {AxiosError}
 */
export async function getTeamsByConfName(conferenceName: Conference): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/confName/${conferenceName}` })
  return data
}
/**
 * The GET /teams/divName/{nickName} call allows your platform to receive an object containing all available teams by division.
 * @summary Get teams by nickname
 * @throws {AxiosError}
 */
export async function getTeamsByNickName(nickName: NickName): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/nickName/${nickName}` })
  return data
}
/**
 * The GET /teams/divName/{shortName} call allows your platform to receive an object containing all available teams by division.
 * @summary Get teams by shortName
 * @throws {AxiosError}
 */
export async function getTeamsByShortName(shortName: ShortName): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/shortName/${shortName}` })
  return data
}
/**
 * The GET /teams/divName/{city} call allows your platform to receive an object containing all available teams by division.
 * @summary Get teams by city
 * @throws {AxiosError}
 */
export async function getTeamsByCity(city: City): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/city/${city}` })
  return data
}
/**
 * The GET /teams/divName/{league} call allows your platform to receive an object containing all available teams by division.
 * @summary Get teams by league
 * @throws {AxiosError}
 */
export async function getTeamsByLeague(league: League): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/league/${league}` })
  return data
}
/**
 * The GET /teams/divName/{id} call allows your platform to receive an object containing all available teams by division.
 * @summary Get teams by id
 * @throws {AxiosError}
 */
export async function getTeamsById(id: TeamId): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/teamId/${id}` })
  return data
}
/**
 * The GET /standings/{league}/{seasonYear} call allows your platform to receive an object containing a list of the Team standings for your provided year.
 * @summary Get standings for a certain year
 * @param {Year} Year
 * @param {Leagues} Leagues
 * @throws {AxiosError}
 */
export async function getStandings(seasonYear: Year, league: Leagues): Promise<Standings> {
  const { data } = await nbaApiRequest({ url: `/standings/${league}/${seasonYear}/` })
  return data
}

export default {}
