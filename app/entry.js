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

const loadavg1 = $('#loadavg1');
const loadavg2 = $('#loadavg2');

let i = 0;
setInterval(() => {
  $.get('/server-status', {}, (data) => {
    //toString()がなぜ必要かわかりません。下二つは同じように表示されました。
    loadavg1.text(`${data.loadavg.toString()} ${i}sec経過(目安)`);
    loadavg2.text(`${data.loadavg} ${i}sec経過(目安)`);
    i++;
  });
}, 1000);
