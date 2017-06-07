'use strict';

const CreateCount = function() {
    const count = (item) => {
        console.log('Counting the countles ' + item);
    };

    return {
        count
    };
};

const counter = CreateCount();
counter.count('apple');
