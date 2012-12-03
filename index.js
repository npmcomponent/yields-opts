
/**
 * opts.
 *
 * Usage:
 *
 *      opts = opts({});
 *      opts('cats', ['lion', 'cheetah']);
 *      opts('other', 'opt');
 *      opts();
 *      // > { cats: ['lion', 'cheetah'], other: 'opt' };
 *
 * @param {Object} obj
 * @return {Function}
 */

module.exports = function (obj) {
  return (function (key, val) {
    switch (arguments.length) {
      case 0: return obj;
      case 1: return obj[key];
      case 2: obj[key] = val;
    }
  });
};
