'use strict';
import $ from 'jQuery';
require('jquery-color');
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
    loadavg.text(data.loadavg.toString());
    //↓アニメーション
    let loadavgNow = data.loadavg[0];
    if (loadavgNow > 0.15){
      block.animate({
        zIndex:1},{
        duration: 4000 * (loadavgNow),
        step:function(now){
          $(this).css({transform:'rotate(' + (now * 360) + 'deg)'});
        },
        complete:function(){
          block.css('zIndex', 0);
        }
      });
    } else if(loadavgNow <= 0.15 && loadavgNow > 0.125){
    block.animate({
      backgroundColor: '#a8eded',
      zIndex:1},{
      duration: 4000 * (loadavgNow),
      step:function(now){
        $(this).css({transform:'rotate(' + (now * 360) + 'deg)'});
      },
      complete:function(){
        block.css('zIndex', 0);
      }
    });
  }else if(loadavgNow <= 0.125 && loadavgNow > 0.1){
    block.css("background-color","#a8eded");
    block.animate({borderRadius: 8/loadavgNow},300);
    block.animate({borderRadius: 0},300);
  }else {
    block.replaceWith(block.text("go ahead!"));
    block.animate({
      width: '200pt',
      backgroundColor: '#ffffff',
      fontSize: "3em"
    });
  }

  });
}, 1000);
