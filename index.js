const express = require("express");
const app = express();
const chalk = require("chalk");

const PORT = 8000;

app.get("/", (req, res) => {
    res.send(`Hello World`);
});

app.listen(PORT, () => {
    console.log(
        chalk.blue(`The server is listening on port http://localhost:${PORT}`)
    );
});
