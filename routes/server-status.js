// 厳格モード
'use strict';
// routerを作成
const express = require('express');
const router = express.Router();
// 'os'モジュールを作成
const os = require('os');

// GETアクセスが送られてきた場合の処理
router.get('/', (req, res, next) => {
  // JSON形式のオブジェクトをデータにセットして返す
  // もしくはJSON形式でオブジェクトの内容を表示する
  res.json({ loadavg: os.loadavg() });
});
// このルーターをモジュールとして公開する
module.exports = router;