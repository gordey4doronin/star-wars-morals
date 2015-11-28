//noinspection JSUnusedGlobalSymbols
var should = require('chai').should();
var data = require('../js/data');

describe('data', function() {
    describe('seasons', function () {
        it('should have all fields', function () {
            data.seasons.forEach(function (x) {
                x.should.have.all.keys([
                    'id',
                    'premiere',
                    'finale',
                    'episodes'
                ]);
            });
        });

        it('should have length 6', function () {
            data.seasons.should.have.length(6);
        });

        it('should have proper id fields', function () {
            data.seasons.forEach(function(x, index) {
                x.id.should.equal(index + 1);
           });
        });
    });

    describe('season 6 episodes', function () {
        var season6 = data.seasons[5];

        it('should have all fields', function () {
            season6.episodes.forEach(function (x) {
                x.should.have.all.keys([
                    'id',
                    'productionId',
                    'order',
                    'title',
                    'moral'
                ]);
            });
        });

        it('should have proper order fields', function () {
            season6.episodes.forEach(function(x, index) {
                x.order.should.equal(index + 1);
            });
        });
    });
});
