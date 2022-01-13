const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true
    },
    address: {
        type: {
            address1: {type: String},
            address2: {type: String},
            country: {type: String},
            postalCode: {type: String}
        },
        required: true,
        _id: false
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;