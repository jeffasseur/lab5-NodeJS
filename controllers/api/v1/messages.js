const Message = require('../../../models/Message');

// Functies voor de GET requests
const getAll = (req, res) => {
    Message.find( (err, docs) => {
        if(err) {
            res.json({
                "status": 'error',
                "message": err
            });
        }

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
    // console.log(req.params.id);
    Message.find({"_id": req.params.id}, (err, doc) => {
        if(err) {
            res.json({
                "status": "error",
                "message": err
            });
        }

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

// Functies voor de POST requests
const create = (req, res) => {
    console.log(req.body);

    let m = new Message();
    m.username = req.body.username;
    m.body = req.body.message;
    m.save( (err, doc) => {
        if(err) {
            res.json({
                "status": "error",
                "message": "Could not save this message"
            });
        }

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
    Message.deleteOne({"_id": req.params.id}, (err, doc) => {
        if(err) {
            res.json({
                "status": "error",
                "message": err
            });
        }

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

// Functies voor de PUT requests
const update = (req, res) => {
    // let response = {
    //     "status": "success",
    //     "message": "Message updated",
    //     "data": {

    //     }
    // };
    // res.json(response);

    Message.updateOne( {"_id": req.params.id}, {$set: {"username": req.body.username, "message": req.body.message}}, (err, doc) => {
        if(err) {
            res.json({
                "status": "error",
                "message": err
            })
        }

        if(!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": doc
                }
            })
        }
    });
}




module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.create = create;
module.exports.remove = remove;
module.exports.update = update;