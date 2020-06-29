'use strict';
const BAR_HEIGHT = 400;
import $ from 'jquery';
var Chart = require('chart.js');
var ctx = $('#myChart');
var dos = $('#dos');
let n = 1;

var myRadarChart = new Chart(ctx, {
  type: 'radar', 
  data: { 
      labels: ["1分毎", "5分毎", "15分毎"],
      datasets: [{
          label: 'サーバ負荷',
          data: [0, 0, 0],
          backgroundColor: 'RGBA(225,95,150, 0.5)',
          borderColor: 'RGBA(225,95,150, 1)',
          borderWidth: 1,
          pointBackgroundColor: 'RGB(46,106,177)'
      }]
  },
  options: {
      title: {
          display: true,
          text: 'ロードアベレージ'
      },
      scale:{
          ticks:{
              suggestedMin: 0,
              suggestedMax: 100,
              stepSize: 10,
              callback: function(value, index, values){
                  return  value +  '%'
              }
          }
      }
  }
});
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
      myRadarChart.data.datasets[0].data[index] = array[index]*100;
      myRadarChart.update();
    });
    loadavg.text(data.loadavg.join(' : '));
  });
}, 1000);

//見かけだけでほとんど負荷掛からなかったです
dos.click(() => {
  if(n < 2048)
    n = n *2;
});

setInterval(() => {
  for(let i = 0; i < n; i++){
    console.log('負荷をかけます');
  }
},1);
