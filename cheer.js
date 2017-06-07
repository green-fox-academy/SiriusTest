'use strict';

class Cheer {
    cheering(who1, who2) {
        console.log('Sziasztok ' + who1 + ' és ' + who2);
    }
};

const cheer = new Cheer();
cheer.cheering('Fanni', 'Zsolt');
