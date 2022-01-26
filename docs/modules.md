[@croisade/nba-api-wrapper](README.md) / Exports

# @croisade/nba-api-wrapper

## Table of contents

### Enumerations

- [Conference](enums/Conference.md)
- [Division](enums/Division.md)
- [Leagues](enums/Leagues.md)

### Interfaces

- [Base](interfaces/Base.md)
- [League](interfaces/League.md)
- [Season](interfaces/Season.md)
- [Standings](interfaces/Standings.md)
- [StandingsData](interfaces/StandingsData.md)
- [Teams](interfaces/Teams.md)
- [TeamsData](interfaces/TeamsData.md)

### Functions

- [getLeagues](modules.md#getleagues)
- [getSeasons](modules.md#getseasons)
- [getStandings](modules.md#getstandings)
- [getTeamsByCity](modules.md#getteamsbycity)
- [getTeamsByConfName](modules.md#getteamsbyconfname)
- [getTeamsByDivName](modules.md#getteamsbydivname)
- [getTeamsById](modules.md#getteamsbyid)
- [getTeamsByLeague](modules.md#getteamsbyleague)
- [getTeamsByNickName](modules.md#getteamsbynickname)
- [getTeamsByShortName](modules.md#getteamsbyshortname)

## Functions

### getLeagues

▸ **getLeagues**(): `Promise`<[`League`](interfaces/League.md)\>

The GET /seasons call allows your platform to receive an object containing all available leagues.

**`summary`** Get all available leagues

**`throws`** {AxiosError}

#### Returns

`Promise`<[`League`](interfaces/League.md)\>

#### Defined in

[nbaApi.ts:128](https://github.com/Croisade/nba-api/blob/1eeb9a5/src/nbaApi.ts#L128)

___

### getSeasons

▸ **getSeasons**(): `Promise`<[`Season`](interfaces/Season.md)\>

The GET /seasons call allows your platform to receive an object containing all available seasons.

**`summary`** Get all available seasons

**`throws`** {AxiosError}

#### Returns

`Promise`<[`Season`](interfaces/Season.md)\>

#### Defined in

[nbaApi.ts:118](https://github.com/Croisade/nba-api/blob/1eeb9a5/src/nbaApi.ts#L118)

___

### getStandings

▸ **getStandings**(`seasonYear`, `league`): `Promise`<[`Standings`](interfaces/Standings.md)\>

The GET /standings/{league}/{seasonYear} call allows your platform to receive an object containing a list of the Team standings for your provided year.

**`summary`** Get standings for a certain year

**`throws`** {AxiosError}

#### Parameters

| Name | Type |
| :------ | :------ |
| `seasonYear` | `string` |
| `league` | [`Leagues`](enums/Leagues.md) |

#### Returns

`Promise`<[`Standings`](interfaces/Standings.md)\>

#### Defined in

[nbaApi.ts:175](https://github.com/Croisade/nba-api/blob/1eeb9a5/src/nbaApi.ts#L175)

___

### getTeamsByCity

▸ **getTeamsByCity**(`city`): `Promise`<[`Teams`](interfaces/Teams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `city` | `string` |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:153](https://github.com/Croisade/nba-api/blob/1eeb9a5/src/nbaApi.ts#L153)

___

### getTeamsByConfName

▸ **getTeamsByConfName**(`conferenceName`): `Promise`<[`Teams`](interfaces/Teams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conferenceName` | [`Conference`](enums/Conference.md) |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:138](https://github.com/Croisade/nba-api/blob/1eeb9a5/src/nbaApi.ts#L138)

___

### getTeamsByDivName

▸ **getTeamsByDivName**(`divisionName`): `Promise`<[`Teams`](interfaces/Teams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `divisionName` | [`Division`](enums/Division.md) |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:133](https://github.com/Croisade/nba-api/blob/1eeb9a5/src/nbaApi.ts#L133)

___

### getTeamsById

▸ **getTeamsById**(`id`): `Promise`<[`Teams`](interfaces/Teams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:163](https://github.com/Croisade/nba-api/blob/1eeb9a5/src/nbaApi.ts#L163)

___

### getTeamsByLeague

▸ **getTeamsByLeague**(`league`): `Promise`<[`Teams`](interfaces/Teams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `league` | `string` |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:158](https://github.com/Croisade/nba-api/blob/1eeb9a5/src/nbaApi.ts#L158)

___

### getTeamsByNickName

▸ **getTeamsByNickName**(`nickName`): `Promise`<[`Teams`](interfaces/Teams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nickName` | `string` |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:143](https://github.com/Croisade/nba-api/blob/1eeb9a5/src/nbaApi.ts#L143)

___

### getTeamsByShortName

▸ **getTeamsByShortName**(`shortName`): `Promise`<[`Teams`](interfaces/Teams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shortName` | `string` |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:148](https://github.com/Croisade/nba-api/blob/1eeb9a5/src/nbaApi.ts#L148)
