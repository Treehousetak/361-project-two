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
menu_button.addEventListener('click', function(e){
  nav_list.classList.toggle('visible');
  e.preventDefault();
});


//Add either an automatic or manual slideshow in dreamcars
