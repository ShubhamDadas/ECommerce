const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true,
        unique:true
    },
    phoneno: {
        type: Number,
        required:true,
        length:10
    },
    address: {
        type: String,
        required:true
    }
})

const user = mongoose.model("User",UserSchema)

module.exports=user

