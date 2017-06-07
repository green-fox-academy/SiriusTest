'use strict';

const CreateCount = function() {
    const count = (ages) => {
        console.log(ages);
    };

    return {
        count
    };
};

const counter = CreateCount();
counter.count('24, 26, 29');
