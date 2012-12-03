
var opts = require('opts');

/**
 * assert
 */

function assert (expr, e) {
  if (!expr) throw new Error('its broken' || e);
}


describe('opts', function () {

  describe('opt = opts({})', function () {
    it('should return a new Function', function () {
      assert('function' == typeof opts({}));
    })
  })

  describe('opt(key)', function () {
    it('should return the value', function () {
      var opt = opts({ foo: 'bar' });
      assert(opt('foo') == 'bar');
    })
  })

  describe('opt(key, val)', function () {
    it('should map the given key to the give val', function () {
      var opt = opts({ foo: 'bar' });
      assert(opt('foo') == 'bar');
    })
  })

  describe('opt()', function () {
    it('should return the options', function () {
      var obj, opt = opts(obj = {});
      assert(obj === opt());
    })
  })


})
