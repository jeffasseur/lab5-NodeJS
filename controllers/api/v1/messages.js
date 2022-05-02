const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    username: String,
    body: String
});
const Message = mongoose.model('Message', messageSchema);


// Functies voor de GET requests
const getAll = (req, res) => {
    Message.find( (err, docs) => {
        if(!err) {
            res.json({
                "status": "success",
                "data": {
                    "messages": docs
                }
            });
        }
    });
}

const getById = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": {"username": "Jef ID", "body": "This is a test message"}
        }
    });
}

// Functies voor de POST requests
const create = (req, res) => {
    let m = new Message();
    m.username = "Jef";
    m.body = "Text message created";
    m.save( (err, doc) => {
        if(!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": doc
                }
            });
        }
    });
}

// Functies voor de DELETE requests
const remove = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": {"username": "Jef", "body": "Text message DELETED"} 
        }
    });
}

// Functies voor de PUT requests
const update = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": {"username": "Jef", "body": "Text message updated"}
        }
    });
}




module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.create = create;
module.exports.remove = remove;
module.exports.update = update;