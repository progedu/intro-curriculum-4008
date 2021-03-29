'use strict';
const express = require('express');
const router = express.Router();
const os = require('os');
//GETメソッドでload averageを取得するよう実装
router.get('/', (req, res, next) => {
  res.json({ loadavg: os.loadavg() });
});

module.exports = router;