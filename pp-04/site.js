"use strict";
(function(){
  if (typeof(document.querySelector)==="undefined") {
    return;
  }
  document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('html').className = 'js';

function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

document.addEventListener('click', function() {
     doorbell.play();
   });

document.addEventListener('keydown', function(d) {
  if (d.keyCode == 68) {
    document.getElementById('controls').play();
  }

    });
  });
})();
