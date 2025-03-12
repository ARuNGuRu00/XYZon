var home=0;
var program=0;
var about=0;

function activate(ele) {
    var x = document.getElementById(ele);
    console.log(x.style.display);
    if (x.style.display === 'none') {
      x.style.display = 'flex';
    } else {
      x.style.display = 'none';
    }
  }