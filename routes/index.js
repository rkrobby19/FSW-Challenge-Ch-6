const fs = require("fs");
const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: true }));

// ! === VIEW RENDER ===

// * Challenge Ch 3
router.get("/", (req, res) => {
    res.render("index", {
        tittle: "Home Page",
        css: "../public/assets/stylesheets/index.css",
        js: "../public/assets/javascripts/index.js",
    });
});
// * Challenge Ch 4
router.get("/the-game", (req, res) => {
    res.render("the-game", {
        tittle: "The Game",
        css: "../public/assets/stylesheets/the-game.css",
        js: "../public/assets/javascripts/the-game.js",
    });
});

router.get("/login", (req, res) => {
    res.render("login", {
        tittle: "Login",
        css: "../public/assets/stylesheets/login.css",
        js: "../public/assets/javascripts/login.js",
    });
});

router.get("/dashboard", async (req, res) => {
    const usersData = await fetch("http://localhost:8000/users");
    const data = await usersData.json();
    console.log(data);
    res.render("dashboard", {
        tittle: "Dashboard",
        css: "../public/assets/stylesheets/dashboard.css",
        js: "../public/assets/javascripts/dashboard.js",
        users: data,
    });
});

router.get("/create-user", (req, res) => {
    res.render("create-user", {
        tittle: "Create User",
        css: "../public/assets/stylesheets/create-user.css",
        js: "../public/assets/javascripts/create-user.js",
    });
});

router.get("/users/:id/user-profile", async (req, res) => {
    const userData = await fetch(
        `http://localhost:8000/users/${req.params.id}`
    );
    const userBiodata = await fetch(
        `http://localhost:8000/users/${req.params.id}/biodata`
    );
    const userGameHistory = await fetch(
        `http://localhost:8000/users/${req.params.id}/game-history`
    );
    const user = await userData.json();
    const biodata = await userBiodata.json();
    const gameHistory = await userGameHistory.json();
    res.render("user-profile", {
        tittle: "User Profile",
        css: "../../public/assets/stylesheets/user-profile.css",
        js: "../../public/assets/javascripts/user-profile.js",

        userData: user,
        userBiodata: biodata,
        userGameHistory: gameHistory,
    });
});

router.get("/users/:id/edit-profile", async (req, res) => {
    const userData = await fetch(
        `http://localhost:8000/users/${req.params.id}`
    );
    const userBiodata = await fetch(
        `http://localhost:8000/users/${req.params.id}/biodata`
    );
    const user = await userData.json();
    const biodata = await userBiodata.json();

    res.render("edit-profile", {
        tittle: "Edit Profile",
        css: "../../public/assets/stylesheets/edit-profile.css",
        js: "../../public/assets/javascripts/edit-profile.js",

        userData: user,
        userBiodata: biodata,
    });
});

router.get("/users/:id/user-game-history", async (req, res) => {
    const userData = await fetch(
        `http://localhost:8000/users/${req.params.id}`
    );
    const data = await fetch(
        `http://localhost:8000/users/${req.params.id}/game-history`
    );
    const user = await userData.json();
    const userGameHistory = await data.json();

    res.render("game-history", {
        tittle: "Game History",
        css: "../../public/assets/stylesheets/game-history.css",
        js: "../../public/assets/javascripts/game-history.js",
        user: user,
        gameHistory: userGameHistory,
    });
});

module.exports = router;
