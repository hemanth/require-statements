#!/usr/bin/env node
'use strict';
var meow = require('meow');
var requireStatements = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ require-statements <path>',
		'  <path> defaults to "./package.json"'
	]
});

console.log(requireStatements(cli.input[0]));
