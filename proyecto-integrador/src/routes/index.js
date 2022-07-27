const express = require('express');
const { getIndex, postIndex } = require('../controllers/index.controller');
const router = express.Router();

/* GET home page. */
router.get('/', getIndex);
router.post('/', postIndex);

module.exports = router;

