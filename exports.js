// Pass the global object by reference
(function (global) {
  // Initialize an empty module object to be referenced
  module = {};

  // Set getters and setters for `module.exports` and the `exports` alias
  var name = 'exports';
  if (typeof Object.getOwnPropertyDescriptor(module, name) === 'undefined') {
    // Extend the global namespace from the local object
    Object.defineProperty(module, name, {
      // Set a setter to handle the object's properties
      set: function (props) {
        // Export each local variable to the `this` object.
        for (var prop in props) {
          // Make sure we aren't inheriting any prototype properties
          if (props.hasOwnProperty(prop)) {
            global[prop] = props[prop];
          }
        }
      },
      get: function () {
        return global;
      }
    });
  }
  // Set `exports` to the original value of `module.exports`
  exports = module.exports;
})((function () {
  // Pass top-level (global) object to the above function
  return (function() {
    return this;
  }).call(null); // Force `this` to be the top-level object.
})());
