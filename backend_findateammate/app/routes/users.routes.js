module.exports = app => {
    const users = require("../controller/users.controller.js");

    var router = require("express").Router();

    router.post("/create", users.create);
    router.get("/:id", users.findOne);
    router.get("/random", users.findRandom);

    app.use('/api/users', router);
}
