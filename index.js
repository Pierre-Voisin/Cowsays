const userInfo = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `Bonjour, je suis ${userInfo.nom} du campus de ${userInfo.campus}!`,
    e : "oO",
    T : "U "
}));