// Git root
var domain = document.location.host;
var newRoot;
var root = document.getElementById('logo-container');
var root2 = document.querySelector('.breadcrumb');
// console.log(root2);

switch (domain) {
  case 'njorogetimk.github.io':newRoot="/website";
  root.href = newRoot;
  if (root2!=null) {
    root2.href = newRoot;
  }
  break;
  // case "": newRoot="file:///home/tim/Desktop/weeb/website/index.html"
  // root.href = newRoot;
  // if (root2!=null) {
  //   root2.href = newRoot;
  // }
  default:
  break;
}


// Opera Mini Browser detection
var isOperaMini = (navigator.userAgent.indexOf('Opera Mini') > -1);
if (isOperaMini == false) {
  var opera = document.getElementById('opera');
  if (opera != null) {
    opera.style.display = 'none';
  }

}


// navigation Bar
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {preventScrolling:true});
});
// Collapsible menus in sidenav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
});
// Slider
// Slider
document.addEventListener('DOMContentLoaded', function() {
  var slider = document.querySelectorAll('.slider');
  var instances = M.Slider.init(slider, {});
});

// material boxed
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, {});
});

// Collapsible menus in sidenav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.newCollapsible');
  var instances = M.Collapsible.init(elems, {});
});

// Dropdown
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, { constrainWidth:false, coverTrigger:false});
});
