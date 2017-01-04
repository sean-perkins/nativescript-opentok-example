var Observable = require("data/observable").Observable;

var OT = require("nativescript-opentok");

var apiKey = '45743242';
var sessionId = '1_MX40NTc0MzI0Mn5-MTQ4MzQwMzM1NzM5N34rUTZFS1JSY0E0Z3hXMXhlYlZYblk5amh-fg';
var token = 'T1==cGFydG5lcl9pZD00NTc0MzI0MiZzaWc9Y2VkNjE3YmM4NzA0ZWY0M2FjOGNjOWNlMGM3ZWI0MGRjZDI4OWQ1YzpzZXNzaW9uX2lkPTFfTVg0ME5UYzBNekkwTW41LU1UUTRNelF3TXpNMU56TTVOMzRyVVRaRlMxSlNZMEUwWjNoWE1YaGxZbFpZYmxrNWFtaC1mZyZjcmVhdGVfdGltZT0xNDgzNDAzMzY1Jm5vbmNlPTAuMTM1MzI5MjkzNzEwNzEzNTYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTQ4NTk5NTM2Ng==';

function createViewModel(page) {
    var viewModel = new Observable();

    var session = OT.TNSOTSession.initWithApiKeySessionId(apiKey, sessionId);

    var subscriber= page.getViewById('subscriber');
    session.subscriber = subscriber;

    session.connect(token);

    var publisher = page.getViewById('publisher');
    publisher.publish(session);

    return viewModel;
}

exports.createViewModel = createViewModel;