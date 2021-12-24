const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const app = express();
const axios = require("axios");

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

require("./app/routes/users.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. `)
})
app.get("/", (req, res) => {
  res.json({message: "cao"});
})


const db = require("./app/models");
const sequelize = require("sequelize");
db.sequelize.sync();