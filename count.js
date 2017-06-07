'use strict';

const CreateCount = function() {
    const count = (year, month) => {
        console.log(year, month);
    };

    return {
        count
    };
};

const counter = CreateCount();
counter.count(1987, 11);
