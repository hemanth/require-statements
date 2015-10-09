#!/usr/bin/env node
'use strict';
var meow = require('meow');
var requireStatements = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ require-statements <--import> <path> ',
		'  <path> defaults to "./package.json"',
		'  <--import> if you need import statements instead.'
	]
});

console.log(requireStatements(cli.input[0], cli.flags));
