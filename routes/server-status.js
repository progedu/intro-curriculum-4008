'use strict';
let express = require('express');
let router = express.Router();
let os = require('os');

router.get('/', (req, res, next) => {
  res.json({ loadavg: os.loadavg() });
});

module.exports = router;