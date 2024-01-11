const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
        //this will be the message what the user type and we put the data type as str
        chat: String,
        //this takes in the id of the user and displays who sent the message
        user: {
            id:{
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            name: String,
        },
    },
    {timestamps:true}
);

module.exports = mongoose.model("Chat", chatSchema)