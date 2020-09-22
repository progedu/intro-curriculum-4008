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

const loadavg = $('#loadavg');//id設定されたjQuery オブジェクトを取得し、変数に入れる

setInterval(() => {//1000ミリ秒に1回処理をする。(1秒に1回)
  $.get('/server-status', {}, (data) => {//アクセスあったらAJAX通信する、届いたら
    loadavg.text(data.loadavg.toString());//受け取ったデータが data という引数に渡されるので、 そのプロパティの loadavg の配列取得して文字列に変換し、 段落の内部のテキストを書き換える
  });
}, 1000);
