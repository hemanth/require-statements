#!/usr/bin/env node
'use strict';
var meow = ((m) => (m && m.default) ? m.default : m)(require('meow'));
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
