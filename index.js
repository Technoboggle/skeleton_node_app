var toAdd = 23;
/**
 * A simple doc block
 *
 * @param {number} sumVal in the addition process
 * @returns {number} the sum of two numbers.
 */
function summer (sumVal) {
  // Adding a simple remark in order to force test at rebuild
  return function (toAdd) {
    if (!toAdd) throw new Error('trying to pull a fast one?');
    return sumVal + toAdd;
  };
}

module.exports = summer;
