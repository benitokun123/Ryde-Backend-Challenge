const express = require("express");
const userRouter = express.Router();
const User = require("../models/users");

userRouter.route("/").get((req, res) => {
    User.find({})
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json(err));
})

userRouter.route("/:id").get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json(err));
})

userRouter.route("/").post((req, res) => {
    let {name, username, dob, address, description} = req.body;
    let newUser = new User({name, username, dob, address, description});
    newUser.save()
    .then(user => res.status(201).json(user))
    .catch(err => res.status(400).json(err));
})

userRouter.route("/:id").put((req, res) => {
    let {name, username, dob, address, description} = req.body;

    User.findByIdAndUpdate(req.params.id, {name, username, dob, address, description})
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json(err));
})

userRouter.route("/:id").delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("User deleted"))
    .catch(err => res.status(400).json(err));
})

module.exports = userRouter;