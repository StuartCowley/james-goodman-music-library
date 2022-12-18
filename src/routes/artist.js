const express = require('express');
const artistController = require('../controllers/artist');
const db = require('../db/index');

const router = express.Router();

router.post('/', artistController.createArtist);

module.exports = router;