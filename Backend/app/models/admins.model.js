const mongoose = require('mongoose');
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        password: String,
        name: String,
        address: String,
        phone: Number,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
);
module.exports = User;