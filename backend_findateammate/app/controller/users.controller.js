const sequelize = require("sequelize");
const db = require("../models/users.model");
const user = db.users;


exports.create = (req, res) => {
    if (!req.body.username && !req.body.password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const user = {
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,
        email: req.body.age
    };
    user.create(user).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the user."
        })
    })
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    user.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};
exports.update = (req, res) => {

};
exports.findRandom = (req,res) => {
  user.findOne({
    order: sequelize.random()
  })
  .then(data => {
  if(data)
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: "error finding a random user"
    });
});
  
};