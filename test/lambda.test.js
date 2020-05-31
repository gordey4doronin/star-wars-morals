const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.should()
chai.use(chaiAsPromised);

const index = require('../lambda-functions/index')

describe('lambda handler', () => {
  it('should throw for undefined route', async () => {
    // arrange
    const event = {}

    // act
    const result = index.handler(event)

    // assert
    result.should.be.rejectedWith(/Unexpected route key undefined/)
  });


  it('should throw for unknown route', async () => {
    // arrange
    const event = { routeKey: 'GET /unknown' }

    // act
    const result = index.handler(event)

    // assert
    result.should.be.rejectedWith(/Unexpected route key GET \/unknown/)
  });

  it('should return seasons', async () => {
    // arrange
    const event = {
      routeKey: 'GET /seasons',
      pathParameters: { season_id: 1 }
    }

    // act
    const result = JSON.parse(await index.handler(event))

    // assert
    result.should.deep.equal([
      { 'id': 1, 'premiere': '2008/10/03', 'finale': '2009/03/20', 'episodes': 22 },
      { 'id': 2, 'premiere': '2009/10/02', 'finale': '2010/04/30', 'episodes': 22 },
      { 'id': 3, 'premiere': '2010/09/17', 'finale': '2011/04/01', 'episodes': 0 },
      { 'id': 4, 'premiere': '2011/09/16', 'finale': '2012/03/16', 'episodes': 22 },
      { 'id': 5, 'premiere': '2012/09/29', 'finale': '2013/03/02', 'episodes': 20 },
      { 'id': 6, 'premiere': '2014/02/15', 'finale': '2014/03/08', 'episodes': 13 }
    ])
  });

  it('should return single season', async () => {
    // arrange
    const event = {
      routeKey: 'GET /seasons/{season_id}',
      pathParameters: { season_id: 1 }
    }

    // act
    const result = JSON.parse(await index.handler(event))

    // assert
    result.should.deep.equal({ id: 1, premiere: '2008/10/03', finale: '2009/03/20', episodes: 22 })
  });

  it('should return episodes', async () => {
    // arrange
    const event = {
      routeKey: 'GET /seasons/{season_id}/episodes',
      pathParameters: { season_id: 1 }
    }

    // act
    const result = JSON.parse(await index.handler(event))

    // assert
    result.should.have.length(22)
    result.forEach((episode) => episode.should.have.all.keys(['id', 'productionId', 'order', 'title', 'moral']))
  });

  it('should return single episode', async () => {
    // arrange
    const event = {
      routeKey: 'GET /seasons/{season_id}/episodes/{episode_id}',
      pathParameters: { season_id: 1, episode_id: 1 }
    }

    // act
    const result = JSON.parse(await index.handler(event))

    // assert
    result.should.have.all.keys(['id', 'productionId', 'order', 'title', 'moral'])
  });
});

/**
 * This test is here just to make sure JS data is up to date with JSON data.
 * In future JSON file should be used in all places and this test to be removed same as JS file itself.
 */
describe('data', () => {
  const dataJs = require('../js/data')
  const dataJson = require('../lambda-functions/data.json')

  it('should be equal in json and js files', () => {
    dataJs.should.deep.equal(dataJson)
  })
})
