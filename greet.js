'use strict';

const greet = function() {
    const myname = function(name) {
        console.log(name);
    }
    
    return {
    myname
    };
};

const app = greet();
app.myname('Fanni')