// es6/test.js
'use strict';

var sentences = [// 定数の宣言
{ subject: 'JavaScript', verb: 'is', object: 'great' }, { subject: 'Elephants', verb: 'are', object: 'large' }];

function say(_ref) {// オブジェクトのデストラクチャリング
  // console.log(`${subject} ${verb} ${object}`); // テンプレート文字列

  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var s = _step.value;
    // for ... ofの構文とlet
    say(s);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}