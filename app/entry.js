'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

const movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

const loadavg = $('#loadavg');

setInterval(() => {
  $.get('/server-status', {}, (data) => {//GET メソッドで/server-statusに何もデータを渡さずアクセス。最後の引数で、レスポンスが返ってきた際に実行する無名関数を書いている
    loadavg.text(data.loadavg.toString());//受け取ったデータが data という引数に渡される→dataプロパティの loadavg の配列を取得、文字列に変換
  });
}, 1000);//ポーリングを10ミリ秒間隔から1000ミリ秒間隔に変更し、load averageで表されるサーバー負荷の値を下げた。
