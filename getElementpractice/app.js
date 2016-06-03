function changeBig(){
  var grow = document.getElementById("sup");
  grow.style.fontSize = 70;
}

function changeSmall() {
  var shrink = document.getElementById("sup");
  shrink.style.fontSize = 10;
}

function changeColor(newColor){ // passing in parameter to not have multiple functions! keeping it DRY
  document.getElementById("bro").style.color = newColor;
}
