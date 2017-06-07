'use strict';

const greet = function() {
    const greet = function(toPrint) {
        console.log(toPrint);
    }

    return {
    greet
    };
};

const app = greet();
app.greet('Greetings')
