const wilder = require('./information.js');

const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `Hello ${wilder.wilderName} from ${wilder.campus}!`,
    e : "oO",
    T : "U"
}));