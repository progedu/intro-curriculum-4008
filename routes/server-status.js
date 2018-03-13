'use strict';
const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/', (req, res, next) => {
  res.json({
    loadavg: os.loadavg(),
    freemem: os.freemem()
  });
});

module.exports = router;