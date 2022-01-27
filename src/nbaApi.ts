/* eslint-disable max-len */
import nbaApiRequest from './utils/request'

export enum Conference {
  east = 'east',
  west = 'west',
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
    standard: {
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

export async function getTeamsByDivName(divisionName: Division): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/divName/${divisionName}` })
  return data
}

export async function getTeamsByConfName(conferenceName: Conference): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/confName/${conferenceName}` })
  return data
}

export async function getTeamsByNickName(nickName: string): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/nickName/${nickName}` })
  return data
}

export async function getTeamsByShortName(shortName: string): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/shortName/${shortName}` })
  return data
}

export async function getTeamsByCity(city: string): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/city/${city}` })
  return data
}

export async function getTeamsByLeague(league: string): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/league/${league}` })
  return data
}

export async function getTeamsById(id: string): Promise<Teams> {
  const { data } = await nbaApiRequest({ url: `/teams/teamId/${id}` })
  return data
}

/**
 * The GET /standings/{league}/{seasonYear} call allows your platform to receive an object containing a list of the Team standings for your provided year.
 * @summary Get standings for a certain year
 * @param {string} seasonYear
 * @param {Leagues} Leagues
 * @throws {AxiosError}
 */
export async function getStandings(seasonYear: string, league: Leagues): Promise<Standings> {
  const { data } = await nbaApiRequest({ url: `/standings/${league}/${seasonYear}/` })
  return data
}

export default {}
