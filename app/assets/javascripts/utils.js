let utils = {
  /*
    Returns a function, that, as long as it continues to be invoked, will not
    be triggered. The function will be called after it stops being called for
    N milliseconds. If `immediate` is passed, trigger the function on the
    leading edge, instead of the trailing.
    Usage
    var myEfficientFn = utils.debounce(function() {
      All the taxing stuff you do
    }, 250);
    window.addEventListener('resize', myEfficientFn);
  */
  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },
  /*
    The polling function will return a deferred/promise object. 
    The conditional function which signals polling success, a conditional failure 
    which hasn't timeout out, so we'll run again, or a failure which has run past
    timeout which should return an error.
    Usage: ensure element is visible
    utils.poll(function() {
      return document.getElementById('lightbox').offsetWidth > 0;
    }, 2000, 150);
  */
  poll(fn, timeout, interval) {
      var dfd = $.Deferred();
      var endTime = Number(new Date()) + (timeout || 2000);
      interval = interval || 100;

      (function p() {
              // If the condition is met, we're done! 
              if(fn()) {
                  dfd.resolve();
              }
              // If the condition isn't met but the timeout hasn't elapsed, go again
              else if (Number(new Date()) < endTime) {
                  setTimeout(p, interval);
              }
              // Didn't match and too much time, reject!
              else {
                  dfd.reject(new Error('timed out for ' + fn + ': ' + arguments));
              }
      })();
      return dfd.promise;
  },
  /*
    There are times when you prefer a given functionality only happen once,
    similar to the way you'd use an onload event. The once function ensures a
    given function can only be called once, thus prevent duplicate
    initialization!
    Usage:
    var canOnlyFireOnce = utils.once(function() {
      console.log('Fired!');
    });
    canOnlyFireOnce(); // "Fired!"
    canOnlyFireOnce(); // nada
  */
  once(fn, context) { 
    var result;

    return function() { 
      if(fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }

      return result;
    };
  },
  /*
    Usage
    utils.getAbsoluteUrl('/something'); //http://www.example.com/something
  */
  getAbsoluteUrl: (() => {
    var a;

    return function(url) {
      if(!a) a = document.createElement('a');
      a.href = url;

      return a.href;
    };
  })()
};

module.exports = utils;