$(document).ready(function () {
    // create and bind viewmodel
    var viewModel = new Application.ViewModel(Application.data);
    viewModel.selectRandomEpisode();
    ko.applyBindings(viewModel);

    // set language toggling
    setInterval(function () {
//        viewModel.toggleLang();
        viewModel.selectRandomEpisode();
    }, 10000);

    // set sound volume
    $('audio').get(0).volume = 0.3;
});