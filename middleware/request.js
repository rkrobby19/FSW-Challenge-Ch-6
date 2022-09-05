const chalk = require("chalk");

const requestTime = function (req, res, next) {
    const time = new Date();
    console.log(chalk.bgYellow("===     Information     ==="));
    console.log(
        `You are accessing the ${chalk.bold.greenBright.italic(
            req.method
        )} - ${chalk.bold.cyan.underline(req.url)} \nat ${chalk.bgCyan(
            time.toLocaleString()
        )} `
    );
    console.log(chalk.bgYellow("===  Created By: Robby  ==="));
    next();
};

module.exports = requestTime;
