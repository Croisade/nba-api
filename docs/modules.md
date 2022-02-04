[@croisade/nba-api-wrapper](README.md) / Exports

# @croisade/nba-api-wrapper

## Table of contents

### Enumerations

- [City](enums/City.md)
- [Conference](enums/Conference.md)
- [Division](enums/Division.md)
- [Leagues](enums/Leagues.md)
- [NickName](enums/NickName.md)
- [ShortName](enums/ShortName.md)
- [TeamId](enums/TeamId.md)
- [Year](enums/Year.md)

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

[nbaApi.ts:321](https://github.com/Croisade/nba-api/blob/d0280ab/src/nbaApi.ts#L321)

___

### getSeasons

▸ **getSeasons**(): `Promise`<[`Season`](interfaces/Season.md)\>

The GET /seasons call allows your platform to receive an object containing all available seasons.

**`summary`** Get all available seasons

**`throws`** {AxiosError}

#### Returns

`Promise`<[`Season`](interfaces/Season.md)\>

#### Defined in

[nbaApi.ts:312](https://github.com/Croisade/nba-api/blob/d0280ab/src/nbaApi.ts#L312)

___

### getStandings

▸ **getStandings**(`seasonYear`, `league`): `Promise`<[`Standings`](interfaces/Standings.md)\>

The GET /standings/{league}/{seasonYear} call allows your platform to receive an object containing a list of the Team standings for your provided year.

**`summary`** Get standings for a certain year

**`throws`** {AxiosError}

#### Parameters

| Name | Type |
| :------ | :------ |
| `seasonYear` | [`Year`](enums/Year.md) |
| `league` | [`Leagues`](enums/Leagues.md) |

#### Returns

`Promise`<[`Standings`](interfaces/Standings.md)\>

#### Defined in

[nbaApi.ts:395](https://github.com/Croisade/nba-api/blob/d0280ab/src/nbaApi.ts#L395)

___

### getTeamsByCity

▸ **getTeamsByCity**(`city`): `Promise`<[`Teams`](interfaces/Teams.md)\>

The GET /teams/divName/{city} call allows your platform to receive an object containing all available teams by division.

**`summary`** Get teams by city

**`throws`** {AxiosError}

#### Parameters

| Name | Type |
| :------ | :------ |
| `city` | [`City`](enums/City.md) |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:366](https://github.com/Croisade/nba-api/blob/d0280ab/src/nbaApi.ts#L366)

___

### getTeamsByConfName

▸ **getTeamsByConfName**(`conferenceName`): `Promise`<[`Teams`](interfaces/Teams.md)\>

The GET /teams/divName/{conferenceName} call allows your platform to receive an object containing all available teams by division.

**`summary`** Get teams by conference name

**`throws`** {AxiosError}

#### Parameters

| Name | Type |
| :------ | :------ |
| `conferenceName` | [`Conference`](enums/Conference.md) |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:339](https://github.com/Croisade/nba-api/blob/d0280ab/src/nbaApi.ts#L339)

___

### getTeamsByDivName

▸ **getTeamsByDivName**(`divisionName`): `Promise`<[`Teams`](interfaces/Teams.md)\>

The GET /teams/divName/{divisionName} call allows your platform to receive an object containing all available teams by division.

**`summary`** Get teams by division name

**`throws`** {AxiosError}

#### Parameters

| Name | Type |
| :------ | :------ |
| `divisionName` | [`Division`](enums/Division.md) |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:330](https://github.com/Croisade/nba-api/blob/d0280ab/src/nbaApi.ts#L330)

___

### getTeamsById

▸ **getTeamsById**(`id`): `Promise`<[`Teams`](interfaces/Teams.md)\>

The GET /teams/divName/{id} call allows your platform to receive an object containing all available teams by division.

**`summary`** Get teams by id

**`throws`** {AxiosError}

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`TeamId`](enums/TeamId.md) |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:384](https://github.com/Croisade/nba-api/blob/d0280ab/src/nbaApi.ts#L384)

___

### getTeamsByLeague

▸ **getTeamsByLeague**(`league`): `Promise`<[`Teams`](interfaces/Teams.md)\>

The GET /teams/divName/{league} call allows your platform to receive an object containing all available teams by division.

**`summary`** Get teams by league

**`throws`** {AxiosError}

#### Parameters

| Name | Type |
| :------ | :------ |
| `league` | [`League`](interfaces/League.md) |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:375](https://github.com/Croisade/nba-api/blob/d0280ab/src/nbaApi.ts#L375)

___

### getTeamsByNickName

▸ **getTeamsByNickName**(`nickName`): `Promise`<[`Teams`](interfaces/Teams.md)\>

The GET /teams/divName/{nickName} call allows your platform to receive an object containing all available teams by division.

**`summary`** Get teams by nickname

**`throws`** {AxiosError}

#### Parameters

| Name | Type |
| :------ | :------ |
| `nickName` | [`NickName`](enums/NickName.md) |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:348](https://github.com/Croisade/nba-api/blob/d0280ab/src/nbaApi.ts#L348)

___

### getTeamsByShortName

▸ **getTeamsByShortName**(`shortName`): `Promise`<[`Teams`](interfaces/Teams.md)\>

The GET /teams/divName/{shortName} call allows your platform to receive an object containing all available teams by division.

**`summary`** Get teams by shortName

**`throws`** {AxiosError}

#### Parameters

| Name | Type |
| :------ | :------ |
| `shortName` | [`ShortName`](enums/ShortName.md) |

#### Returns

`Promise`<[`Teams`](interfaces/Teams.md)\>

#### Defined in

[nbaApi.ts:357](https://github.com/Croisade/nba-api/blob/d0280ab/src/nbaApi.ts#L357)
