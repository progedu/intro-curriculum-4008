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

const [loadavg, cpuArch, osPlatform, freeMemory] = [$('#loadavg'),$('#cpuArch'), $('#osPlatform'), $('#freeMemory')];//jQueryオブジェクトをそれぞれ定数にいれる

setInterval(() => {
  $.get('/server-status', {}, (data) => {
    loadavg.text(data.loadavg.toString());
    cpuArch.text(data.cpuArch);//CPUのアーキテクチャ
    osPlatform.text(data.osPlatform);//OSの種類
    freeMemory.text(data.freeMemory.toString());//空きメモリ容量
  });
}, 1000);
