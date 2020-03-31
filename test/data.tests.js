require('chai').should();
var data = require('../js/data');

describe('data', () => {
    describe('seasons', () => {
        it('should have length 6', () => {
            data.seasons.should.have.length(6);
        });

        context('check number of episodes', () => {
            const numbers = [22, 22, 22, 22, 20, 13];

            data.seasons.forEach((season, index) => {
                const func = index === 2 ? xit : it; // TODO: Add season 3 data.

                func(`season ${index + 1} should have ${numbers[index]} episodes`, () => {
                    season.episodes.should.have.length(numbers[index]);
                });
            });
        });

        context('check all required fields', () => {
            data.seasons.forEach((season, index) => {
                it(`season ${index + 1} should have all required fields`, () => {
                    season.should.have.all.keys(['id', 'premiere', 'finale', 'episodes']);
                });
            });
        });

        context('check id values', () => {
            data.seasons.forEach((season, index) => {
                it(`season ${index + 1} should have proper id fields`, () => {
                    season.id.should.equal(index + 1);
                });
            });
        });
    });

    describe('episodes', () => {
        context('check episodes order values', () => {
            data.seasons.forEach((season, index) => {
                it(`season ${index + 1} episodes should have proper order fields`, () => {
                    season.episodes.forEach((episode, episodeIndex) => episode.order.should.equal(episodeIndex + 1));
                });
            });
        });

        context('check episodes all required fields', () => {
            data.seasons.forEach((season, index) => {
                it(`season ${index + 1} episodes should have all required fields`, () => {
                    season.episodes.forEach((episode) => episode.should.have.all.keys(['id', 'productionId', 'order', 'title', 'moral']));
                });
            });
        });
    });
});
