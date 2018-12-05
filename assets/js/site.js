//document.addEventListener('DOMContentLoaded', function(event) {
//  content.log('DOMContent loaded');
//  document.querySelector('html').className = 'js';
//  if (CSS.supports('display: flex') {
//    var html = document.querySelector('html');
//    var classes = html.className;
//    html.className = classes + ' flexbox';
//  })
// });
document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM Has loaded");
});



//Modify this to add a button to make text visible on click of a button
//menu_button.addEventListener('click', function(e){
//  nav_list.classList.toggle('visible');
//  e.preventDefault();
//});

var buttonB = document.querySelector('.buttonback');
var buttonN = document.querySelector('.buttonnext');
var buttonB2 = document.querySelector('.buttonback2');
var buttonN2 = document.querySelector('.buttonnext2');
var buttonB3 = document.querySelector('.buttonback3');
var buttonN3 = document.querySelector('.buttonnext3');

var c1 = 0;
var c2 = 0;
var c3 = 0;

//tesla slideshow below
buttonN.addEventListener('click', function(){
  c1++;
  if (c1 >= 3) {
    c1 = 0;
  };
  console.log(c1);
  if (c1 === 1) {
    document.getElementById('tcarimg').style.display = "none";
    document.getElementById('tcarimg2').style.display = "block";
  };
  if (c1 === 2) {
    document.getElementById('tcarimg2').style.display = "none";
    document.getElementById('tcarimg3').style.display = "block";
  };
  if (c1 === 0) {
    document.getElementById('tcarimg3').style.display = "none";
    document.getElementById('tcarimg').style.display = "block";
  };
});

buttonB.addEventListener('click', function(){
  c1--;
  if (c1 <= -1) {
    c1 = 2;
  };
  console.log(c1);
  if (c1 === 2) {
    document.getElementById('tcarimg').style.display = "none";
    document.getElementById('tcarimg3').style.display = "block";
  };
  if (c1 === 1) {
    document.getElementById('tcarimg3').style.display = "none";
    document.getElementById('tcarimg2').style.display = "block";
  };
  if (c1 === 0) {
    document.getElementById('tcarimg2').style.display = "none";
    document.getElementById('tcarimg').style.display = "block";
  };
});

//Delorean slideshow below
buttonN2.addEventListener('click', function(){
  c2++;
  if (c2 >= 3) {
    c2 = 0;
  };
  console.log(c2);
  if (c2 === 1) {
    document.getElementById('dcarimg').style.display = "none";
    document.getElementById('dcarimg2').style.display = "block";
  };
  if (c2 === 2) {
    document.getElementById('dcarimg2').style.display = "none";
    document.getElementById('dcarimg3').style.display = "block";
  };
  if (c2 === 0) {
    document.getElementById('dcarimg3').style.display = "none";
    document.getElementById('dcarimg').style.display = "block";
  };
});

buttonB2.addEventListener('click', function(){
  c2--;
  if (c2 <= -1) {
    c2 = 2;
  };
  console.log(c2);
  if (c2 === 2) {
    document.getElementById('dcarimg').style.display = "none";
    document.getElementById('dcarimg3').style.display = "block";
  };
  if (c2 === 1) {
    document.getElementById('dcarimg3').style.display = "none";
    document.getElementById('dcarimg2').style.display = "block";
  };
  if (c2 === 0) {
    document.getElementById('dcarimg2').style.display = "none";
    document.getElementById('dcarimg').style.display = "block";
  };
});

//Ford slideshow below
buttonN3.addEventListener('click', function(){
  c3++;
  if (c3 >= 3) {
    c3 = 0;
  };
  console.log(c3);
  if (c3 === 1) {
    document.getElementById('fcarimg').style.display = "none";
    document.getElementById('fcarimg2').style.display = "block";
  };
  if (c3 === 2) {
    document.getElementById('fcarimg2').style.display = "none";
    document.getElementById('fcarimg3').style.display = "block";
  };
  if (c3 === 0) {
    document.getElementById('fcarimg3').style.display = "none";
    document.getElementById('fcarimg').style.display = "block";
  };
});

buttonB3.addEventListener('click', function(){
  c3--;
  if (c3 <= -1) {
    c3 = 2;
  };
  console.log(c3);
  if (c3 === 2) {
    document.getElementById('fcarimg').style.display = "none";
    document.getElementById('fcarimg3').style.display = "block";
  };
  if (c3 === 1) {
    document.getElementById('fcarimg3').style.display = "none";
    document.getElementById('fcarimg2').style.display = "block";
  };
  if (c3 === 0) {
    document.getElementById('fcarimg2').style.display = "none";
    document.getElementById('fcarimg').style.display = "block";
  };
});



//Add either an automatic or manual slideshow in dreamcars
