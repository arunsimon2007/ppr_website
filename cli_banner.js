const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

figlet('Priya Peggy Romal..', function(err, data) {
    if (err) {
        console.log('Something went wrong in terminal banner...');
        console.dir(err);
        return;
    }
    clear();
    console.log(chalk.magenta.bold(data));
});