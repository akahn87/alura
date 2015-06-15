let exclaimify = require('../exclaimify')

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
  
})(window, jQuery);
