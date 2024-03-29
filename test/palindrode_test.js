'use strict';

var palindrode = require('../lib/palindrode.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['test'] = {
  'correctly matches plaindrome string': function(test) {
    test.expect(1);
    // tests here
    test.ok(palindrode.test('Was it a car or a cat I saw?'));
    test.done();
  },
  'correctly matches non-plaindrom strings': function(test) {
    test.expect(1);
    test.equal(palindrode.test('This is not a palindrome'), false);
    test.done();
  },
  'returns false when passed blank strings': function(test) {
    test.expect(1);
    test.equal(palindrode.test(''), false);
    test.done();
  },
  'returns false when passed only punctuation/spaces': function(test) {
    test.expect(1);
    test.equal(palindrode.test(' ?., '), false);
    test.done();
  },
  'returns false when passed non-string values': function(test) {
    test.expect(3);
    test.equal(palindrode.test(1234), false, 'should not accept numbers');
    test.equal(palindrode.test(), false, 'should not accept undefined');
    test.equal(palindrode.test(false), false, 'should not accept false');
    test.done();
  },
};
