'use strict';
let $ = require('jquery');
let block = $('#block');
let scalingButton = $('#scaling-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

let movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

let loadavg = $('#loadavg');

setInterval(() => {
  $.get('/server-status', {}, (data) => {
    loadavg.text(data.loadavg.toString());
  });
}, 10);