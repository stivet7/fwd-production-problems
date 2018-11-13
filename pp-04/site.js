function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 68) {
    document.getElementById('controls').play();
  }
}

});
