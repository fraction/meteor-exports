Package.describe({
  summary: "Export variables to the global namespace with `module.exports` in Meteor."
});

Package.on_use(function (api) {
  api.add_files('exports.js', ['client', 'server']);
  api.export(['module', 'exports']);
});

Package.on_test(function (api) {
  api.use(['exports', 'tinytest']);
  api.add_files('exports_tests.js', ['client', 'server']);
});
