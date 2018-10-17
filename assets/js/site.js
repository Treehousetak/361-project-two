document.addEventListener('DOMContentLoaded', function(event) {
  content.log('DOMContent loaded');
  document.querySelector('html').className = 'js';
  if (CSS.supports('display: flex') {
    var html = document.querySelector('html');
    var classes = html.className;
    html.className = classes + ' flexbox';
  })
});
