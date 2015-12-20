'use strict';
var camelCase = require('camelcase');
var cwd = require('process').cwd();

module.exports = function (path, flags) {
	if (path && typeof path === 'object') {
		flags = path;
		path = cwd + '/package.json';
	}
	if (!path) {
		path = cwd + '/package.json';
	}
	var packageJSON = require(path);
	return Object.keys(packageJSON.dependencies || {}).map(function (module) {
		if (flags && flags.import) {
			return 'import ' + camelCase(module) + ' from \'' + module + '\';';
		}
		return 'var ' + camelCase(module) + ' = require(\'' + module + '\');';
	}).join('\n');
};
