// dom shizz

var header = document.querySelector("h1")
header.style.color = 'red'

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// calling above function to assign coloe to h1
function changeHeaderColor(){

   colorInput = getRandomColor();
   header.style.color = colorInput;
}


// interval of color change
setInterval("changeHeaderColor()", 500);
