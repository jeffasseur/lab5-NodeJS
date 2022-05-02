// Functies voor de GET requests
const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "messages": []
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
    res.json({
        "status": "success",
        "data": {
            "message": {"username": "Jef", "body": "Text message POSTED"} 
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