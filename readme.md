# require-statements [![Build Status](https://travis-ci.org/hemanth/require-statements.svg?branch=master)](https://travis-ci.org/hemanth/require-statements)

> Generators require statements from `package.json`.

![require-statements](./require-statements.gif)

## Install

```
$ npm install --save require-statements
```


## Usage

```js
var requireStatements = require('require-statements');

requireStatements(); 
// ^ Would read `./package.json` and return require statements for dependencies.

console.log(requireStatements('./package.json'));
/*
var camelcase = require('camelcase');
var meow = require('meow');
*/

console.log(requireStatements('./package.json',{import: true}));
/*
import camelcase from 'camelcase';
import meow from 'meow';
*/
```


## API

### requireStatements([flag][path])

#### path

Type: `string`

Path to the `package.json` defaults to `./package.json`

### flag

Type: `string`

`--import` for import statements instead.

## License

MIT © [Hemanth.HM](http://h3manth.com)
