const express = require('express');
const router = express.Router();

const bookController = require('../controllers/books');
const vhsController = require('../controllers/vhs');

router.get('/', vhsController.getAll);
router.get('/', bookController.getAll);

module.exports = router;