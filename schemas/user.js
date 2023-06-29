const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: true,
    },
    "ID": {
        type: String,
        required: true
    },
    "pw": {
        required: true,
        type: String,
    }
});

module.exports = mongoose.model("Users", usersSchema);