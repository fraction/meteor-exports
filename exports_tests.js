Tinytest.add('Exports - Presence of `module.exports`', function (test) {
  test.equal(typeof module.exports, 'object');
});

Tinytest.add('Exports - Presence of `exports`', function (test) {
  test.equal(typeof exports, 'object');
});

Tinytest.add('Exports - Setting of `module.exports`', function (test) {
  module.exports = {
    a: 1,
    b: 2
  };
  test.equal(a, 1);
  test.equal(b, 2);
});

Tinytest.add('Exports - Reading of `module.exports`', function (test) {
  var readModuleExports = module.exports;
  test.equal(readModuleExports.a, 1);
  test.equal(readModuleExports.b, 2);
});

Tinytest.add('Exports - Reading of `exports`', function (test) {
  var readExports = exports;
  test.equal(readExports.a, 1);
  test.equal(readExports.b, 2);
});
