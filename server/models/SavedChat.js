const {Schema} = require('mongoose');


const savedChatSchema = new Schema({
    chatLog:[
        {
            type:String
        }
    ]
})





module.exports = savedChatSchema;``