let exclaimify = require('../exclaimify')
let Slideout = require('slideout')

console.log(exclaimify('Homepage Controller Loaded!'))

let alertAsyncMessage = function() {
  // CommonJS async syntax webpack magic
  require.ensure([], function() {
    const message = require("../asyncMessage")
    alert(exclaimify(message))
  })
}

let button = document.getElementById('button');

button.addEventListener('click', alertAsyncMessage);

((window, $, undefined) => {
  let $document = $(document);
  
  var slideout = new Slideout({
    'panel': document.getElementById('container'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });

  // Toggle button
  document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
  });
})(window, jQuery);
