Meteor Exports
==============

Export variables to the global namespace with `module.exports` in Meteor.

## Getting Started

Once you've installed [Meteor](https://www.meteor.com/) and [Meteorite](https://github.com/oortcloud/meteorite/), install `exports`.

```
mrt install exports
```

## Usage

Any time you declare something to be `module.exports`, it's automatically exported to the global namespace.

```js
module.exports = {
  bar = 42
};

console.log(foo); // 42
```

You can also use the `exports` shortcut to [reference the global namespace](http://nodejs.org/api/modules.html#modules_exports_alias).

```js
module.exports = {
  bar = 42
};

console.log(exports.foo); // 42
```

## License

```
Copyright 2014 Christian Bundy

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
