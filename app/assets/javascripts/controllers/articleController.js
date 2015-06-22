let Slideout = require('slideout')

console.log('Article Controller Loaded!!')

var slideout = new Slideout({
  'panel': document.getElementById('container-wrapper'),
  'menu': document.getElementById('leftnav-container'),
  'padding': 200,
  'tolerance': 70
});

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});