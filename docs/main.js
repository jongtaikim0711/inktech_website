$(document).ready(function(){
  $('.headers').load('headers.html');
});

$(document).ready(function(){
  $('.index').load('index.html');
});

$(document).ready(function(){
  $('.introduction').load('introduction.html');
});

$(document).ready(function(){
  $('.projects').load('projects.html');
});

$(document).ready(function(){
  $('.contact').load('contact.html');
});

$(document).ready(function(){
  $('.footers').load('footers.html');
});

// to make header fix header on the top
window.onscroll = function() {putHeaderTop()};
var header = document.getElementById("headers");
var sticky = header.offsetTop;

function putHeaderTop() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
}
// end of fixing header top
