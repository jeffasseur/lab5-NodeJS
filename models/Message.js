const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    username: String,
    body: String
});
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;