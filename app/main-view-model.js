var Observable = require("data/observable").Observable;

var OT = require("nativescript-opentok");

var apiKey = '45720082';
var sessionId = '1_MX40NTcyMDA4Mn5-MTQ3OTQwMDk0NDcyN35XdmdkZjlnazN2UytPYk1mNW1aWVZSZmh-fg';
var token = 'T1==cGFydG5lcl9pZD00NTcyMDA4MiZzaWc9YjUxN2NlZmU0MjEyYjU4YTcxMzY0MWU5M2JkZTYyOTIyY2E4OTNhNTpzZXNzaW9uX2lkPTFfTVg0ME5UY3lNREE0TW41LU1UUTNPVFF3TURrME5EY3lOMzVYZG1ka1pqbG5hek4yVXl0UFlrMW1OVzFhV1ZaU1ptaC1mZyZjcmVhdGVfdGltZT0xNDc5NDAwOTU1Jm5vbmNlPTAuOTAzNTUwODk1ODE3Mzk4MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDgxOTkyOTU0';

function createViewModel(page) {
    var viewModel = new Observable();

    var session = OT.TNSOTSession.initWithApiKeySessionId(apiKey, sessionId);
    session.connect(token);

    var publisher = page.getViewById('publisher');
    publisher.publish(session);

    return viewModel;
}

exports.createViewModel = createViewModel;