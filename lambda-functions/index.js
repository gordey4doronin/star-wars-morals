const data = require('./data.json')

const seasons = data.seasons.map(season => ({ ...season, episodes: season.episodes.length }))

const stringify = (body) => JSON.stringify(body, null, 2)
const getSeasons = () => stringify(seasons)
const getSeason = (seasonId) => stringify(seasons[seasonId - 1])
const getEpisodes = (seasonId) => stringify(data.seasons[seasonId - 1].episodes)
const getEpisode = (seasonId, episodeId) => stringify(data.seasons[seasonId - 1].episodes[episodeId - 1])

exports.handler = async (event) => {
  console.log('Received event:', stringify(event))

  const seasonId = event.pathParameters && event.pathParameters.season_id
  const episodeId = event.pathParameters && event.pathParameters.episode_id

  switch (event.routeKey) {
    case 'GET /seasons':
      return getSeasons()

    case 'GET /seasons/{season_id}':
      return getSeason(seasonId)

    case 'GET /seasons/{season_id}/episodes':
      return getEpisodes(seasonId)

    case 'GET /seasons/{season_id}/episodes/{episode_id}':
      return getEpisode(seasonId, episodeId)

    default:
      throw `Unexpected route key ${event.routeKey}`
  }
}
