'use strict';

const greet = function() {
    const greet = function(toPrint) {
        console.log(toPrint, 'from the parameter');
    };

    return {
    greet
    };
};

const app = greet();
app.greet('Greetings');
