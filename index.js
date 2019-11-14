const cowsay = require("cowsay");
const chalk = require('chalk');
const moment = require("moment")
    // const catNames = require('cat-names');

// let cats = catNames.all

// cats.forEach(name => {
//     console.log(name)
// });


// console.log(catNames)
console.log(chalk.red('Hello King Komodo'));
const a = (moment().format('MMMM Do YYYY, h:mm:ss a'))
console.log(a)
console.log(cowsay.say({
    text: "Hello Dean",
    e: "oO",
    T: "U "
}));