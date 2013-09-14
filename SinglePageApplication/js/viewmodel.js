(function (application) {
    application.ViewModel = function ViewModel(data) {
        var self = this;

        // VARIABLES
        self.languages = ['eng', 'rus'];
        self.seasons = data.seasons;

        // OBSERVABLES
        self.selectedSeason = ko.observable(0);
        self.selectedEpisode = ko.observable(0);
        self.selectedLang = ko.observable(0);

        // COMPUTED
        self.moral = ko.computed(function () {
            return self.seasons[self.selectedSeason()].episodes[self.selectedEpisode()].moral[self.languages[self.selectedLang()]];
        });

        // FUNCTIONS
        self.toggleLang = function () {
            self.selectedLang(self.languages.length - 1 - self.selectedLang());
        };

        self.selectSeason = function (index) {
            self.selectedSeason(index);
        };

        self.selectRandomEpisode = function () {
            var random = getRandomInt(0, self.seasons[self.selectedSeason()].episodes.length - 1);
            var current = self.selectedEpisode();

            if (current == random) {
                self.selectRandomEpisode();
                return;
            }

            self.selectedEpisode(random);
        };

        // PRIVATE
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
})(Application);