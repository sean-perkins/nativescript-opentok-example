var Observable = require("data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }

    viewModel.api = '45644202';
    viewModel.sessionId = '1_MX40NTY0NDIwMn5-MTQ3MjIyNzU3NTAwM35FczFWMHdVekNxeXNabWRSTUdIUkpjRmR-fg';
    viewModel.token = 'T1==cGFydG5lcl9pZD00NTY0NDIwMiZzaWc9NTkwNmVhZWZjNDMzNWRlNDY5ZTZmZTkwMjg0Yjk0ODJlZmE4NjFjODpzZXNzaW9uX2lkPTFfTVg0ME5UWTBOREl3TW41LU1UUTNNakl5TnpVM05UQXdNMzVGY3pGV01IZFZla054ZVhOYWJXUlNUVWRJVWtwalJtUi1mZyZjcmVhdGVfdGltZT0xNDcyMjI3NTg4Jm5vbmNlPTAuNzY3MTczMTA0Njg2NjYyNiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDc0ODE5NTg3';

    return viewModel;
}

exports.createViewModel = createViewModel;