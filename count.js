'use strict';

const CreateCount = function() {
    const count = (month) => {
        console.log(month);
    };

    return {
        count
    };
};

const counter = CreateCount();
counter.count('10');
