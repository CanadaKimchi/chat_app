const mongoose = require('mongoose');

// used mongoose to make schema
const userSchema = new mongoose.Schema({
    // user needs to enter a name 
    name:{
        type: String, 
        required: [true, "User must type name"],
        unique: true,
    },
    // the computer doesnt care about the name but token beacuse this is what the computer reads
    token: {
        type: String,
    },
    //will be using this for future update (ex. displaying if the user is online)
    online: {
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose.model("User", userSchema)