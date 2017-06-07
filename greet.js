'use strict';

const greet = function() {
    const greet = function(toPrint, name) {
        console.log(toPrint, name);
    }

    return {
    greet
    };
};

const app = greet();
app.greet('Greetings', 'Fanni')
