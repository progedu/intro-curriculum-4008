'use strict';
const $ = require('jquery');
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');
const loadavg = $('#loadavg');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

setInterval(() => {
  $.get('/server-status', {}, (data) => {
    loadavg.text(data.loadavg.toString());
  });
}, 1000);
