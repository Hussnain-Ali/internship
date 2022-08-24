



var joke = require("give-me-a-joke")

var color = require("colors");

joke.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow)
})

const figlet = require('figlet');
figlet(('Hussnain Ali   !!'), function (err, data) {
    if (err) {
        console.log('Something went wrong...')
        console.dir(err);
        return;
    }
    console.log(data.rainbow.bold)
})
