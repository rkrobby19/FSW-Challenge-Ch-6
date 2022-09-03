const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const chalk = require("chalk");
// ! import models
const { User, UserBiodata, UserGameHistory } = require("./models");

const PORT = 8000;

const jsonParser = bodyParser.json();

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));

// ! VIEW RENDER
app.get("/", (req, res) => {
    res.send(`Hello World`);
});

// ! === API ====

// ! CREATE
// * create user and biodata
app.post("/users", jsonParser, async (req, res) => {
    try {
        let dataUser = await User.create({
            userName: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        let userBiodatas = await UserBiodata.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            phone: req.body.phone,
            birthday: req.body.birthday,
            location: req.body.location,
            UserId: dataUser.id,
        });
        res.status(201).send("User succesfully created");
    } catch (error) {
        console.log(error);
        res.send(`cant register user`);
    }
});
// * create user game history
app.post("/users/:id/game-history", jsonParser, async (req, res) => {
    try {
        let data = await UserGameHistory.create({
            date: req.body.date,
            playTime: req.body.playTime,
            exp: req.body.exp,
            UserId: req.params.id,
        });
        res.status(201).send(data);
    } catch (error) {
        console.log(error);
        res.send(`cant register user`);
    }
});

// ! READ
// * get all users data
app.get("/users", async (req, res) => {
    let data = await User.findAll();
    res.send(data);
});
// * get user by id
app.get("/users/:id", async (req, res) => {
    try {
        let data = await User.findOne({
            where: { id: req.params.id },
        });
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(`error`);
    }
});
// * get user biodata by id
app.get("/users/:id/biodata", async (req, res) => {
    try {
        let data = await UserBiodata.findOne({
            where: { UserId: req.params.id },
        });
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(`error`);
    }
});
// * get user game history
app.get("/users/:id/game-history", async (req, res) => {
    try {
        let data = await UserGameHistory.findAll({
            where: { UserId: req.params.id },
        });
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(`error`);
    }
});

// ! UPDATE
// * update user biodata
app.put("/users/:id/biodata", jsonParser, async (req, res) => {
    try {
        let data = await UserBiodata.findOne({
            where: { UserId: req.params.id },
        });
        (data.firstName = req.body.firstName),
            (data.lastName = req.body.lastName),
            (data.gender = req.body.gender),
            (data.phone = req.body.phone),
            (data.birthday = req.body.birthday),
            (data.location = req.body.location),
            await data.save();
        res.status(201).send(data);
    } catch (error) {
        console.log(error);
        res.send(`error`);
    }
});
// * update user game history
app.put("/users/:id/game-history", jsonParser, async (req, res) => {
    try {
        let data = await UserGameHistory.findOne({
            where: { UserId: req.params.id },
        });
        (data.date = req.body.date),
            (data.playTime = req.body.playTime),
            (data.exp = req.body.exp),
            await data.save();
        res.status(201).send(data);
    } catch (error) {
        console.log(error);
        res.send(`cant register user`);
    }
});

// ! DELETE
// * delete user data only
app.delete("/users/:id", async (req, res) => {
    try {
        let data = await User.findByPk(req.params.id);
        data.destroy();
        res.status(202).send(data);
    } catch (error) {
        console.log(error);
        res.status(422).send("UNABLE TO DELETE DATA");
    }
});
// * delete user biodata
app.delete("/users/:id/biodata", async (req, res) => {
    try {
        let data = await UserBiodata.findOne({
            where: { UserId: req.params.id },
        });
        data.destroy();
        res.status(202).send(data);
    } catch (error) {
        console.log(error);
        res.status(422).send("UNABLE TO DELETE DATA");
    }
});
// * delete user gamehistory (one)
app.delete("/users/:id/game-history", async (req, res) => {
    try {
        let data = await UserGameHistory.findOne({
            where: { UserId: req.params.id },
        });
        data.destroy();
        res.status(202).send(data);
    } catch (error) {
        console.log(error);
        res.status(422).send("UNABLE TO DELETE DATA");
    }
});
// * delete user gamehistories (all)
app.delete("/users/:id/game-histories", async (req, res) => {
    try {
        let data = await UserGameHistory.destroy({
            where: {
                UserId: req.params.id,
            },
        });
        res.status(202).send(`data deleted`);
    } catch (error) {
        console.log(error);
        res.status(422).send("UNABLE TO DELETE DATA");
    }
});

app.listen(PORT, () => {
    console.log(
        chalk.blue(`The server is listening on port http://localhost:${PORT}`)
    );
});
