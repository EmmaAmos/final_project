const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/vhs', require('./vhs'));
router.use('/books', require('./books'));
//router.use('/', require('./search'));

module.exports = router;