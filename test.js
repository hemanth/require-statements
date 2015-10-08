'use strict';
var assert = require('assert');
var requireStatements = require('./');

it('should retrun require statements without path.', function () {
	var res = requireStatements();
	assert.strictEqual(res, 'var camelcase = require(camelcase);\nvar meow = require(meow);');
});

it('should retrun require statements with path.', function () {
	var res = requireStatements('./fixture-package.json');
	assert.strictEqual(res, 'var camelcase = require(camelcase);\nvar meow = require(meow);');
});
