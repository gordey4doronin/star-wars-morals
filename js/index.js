$(document).ready(function () {
    var viewModel = new Application.ViewModel(Application.data);
    viewModel.selectRandomEpisode();
    ko.applyBindings(viewModel);

    setInterval(function () {
        viewModel.toggleLang();
    }, 5000);
});