const express = require('express');
const router = express.Router();
const messageController = require('../../../controllers/api/v1/messages');

/* /api/v1/messages */
    // GET requests
router.get('/', messageController.getAll);

router.get('/:id', messageController.getById);

    // POST request
router.post('/', messageController.create);

    // DELETE request
router.delete('/:id', messageController.remove);

    // PUT request
router.put('/:id', messageController.update);


module.exports = router;