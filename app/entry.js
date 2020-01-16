'use strict';
//2018年度のryjkmrさんのプルリクを参考にしました
const BAR_HEIGHT = 400;
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
  $.get('/server-status', {}, (data) => {
    //loadavg.text(data.loadavg.toString());
    data.loadavg.forEach((value, index, array) => {
      array[index] = value.toFixed(10); //小数点以下の桁数を揃える
      let num = $(`num-${index}`); //対応するdivオブジェクトを取得
      num.text(array[index]); //テキストを書き換え
      let bar = $(`#bar-${index}`); //棒グラフオブジェクトを取得
      bar.height(BAR_HEIGHT * array[index]);
    });
    loadavg.text(data.loadavg.join(' : '));
  });
}, 100);
