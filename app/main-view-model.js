var Observable = require("data/observable").Observable;

var OT = require("nativescript-opentok");

function createViewModel(page) {
    var viewModel = new Observable();

    var session = OT.TNSOTSession.initWithApiKeySessionId('45644202', '1_MX40NTY0NDIwMn5-MTQ3MjIyNzU3NTAwM35FczFWMHdVekNxeXNabWRSTUdIUkpjRmR-fg');
    session.connect('T1==cGFydG5lcl9pZD00NTY0NDIwMiZzaWc9NTkwNmVhZWZjNDMzNWRlNDY5ZTZmZTkwMjg0Yjk0ODJlZmE4NjFjODpzZXNzaW9uX2lkPTFfTVg0ME5UWTBOREl3TW41LU1UUTNNakl5TnpVM05UQXdNMzVGY3pGV01IZFZla054ZVhOYWJXUlNUVWRJVWtwalJtUi1mZyZjcmVhdGVfdGltZT0xNDcyMjI3NTg4Jm5vbmNlPTAuNzY3MTczMTA0Njg2NjYyNiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDc0ODE5NTg3');

    var publisher = page.getViewById('publisher');
    publisher.publish(session);

    return viewModel;
}

exports.createViewModel = createViewModel;