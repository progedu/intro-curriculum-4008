'use strict';
const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/', (req, res, next) => {
  res.json({
    loadavg: os.loadavg(),
    cpuArch: os.arch(),//CPUのアーキテクチャ(ex: 'arm', 'arm64', 'x64', ...)
    osPlatform: os.platform(),//OSの種類(ex: 'linux', 'win32', ...)
    freeMemory: os.freemem() + ' Bytes'//空きメモリ容量
  });
});

module.exports = router;