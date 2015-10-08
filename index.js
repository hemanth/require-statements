'use strict';
var camelCase = require('camelcase');
var cwd = require('process').cwd();

module.exports = function (path) {
	if (!path) {
		path = cwd + '/package.json';
	}
	var packageJSON = require(path);
	return Object.keys(packageJSON.dependencies || {}).map(function (module) {
		return 'var ' + camelCase(module) + ' = require(' + module + ');';
	}).join('\n');
};
