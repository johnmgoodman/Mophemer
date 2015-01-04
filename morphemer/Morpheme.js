/**
 * Object that represents the morpheme, its rules and number of instances
 * @param {String} morpheme - the character segment
 */
function Morpheme(morpheme) {
  if(typeof Morpheme.morphemes[morpheme] !== 'undefined') {
    Morpheme.morphemes[morpheme].instance();
    return Morpheme.morphemes[morpheme];
  } else {
    Morpheme.morphemes[morpheme] = this;
  }

  console.log(morpheme);
  this._instances = 1;
  this.morpheme = morpheme;
  this.left = {};
  this.right = {};
}


Morpheme.morphemes = {};


/**
 * Define a context in which the morpheme can exist
 * @param  {String} strLeft - character segment that occurred to the left of the morpheme segment
 * @param  {String} strRight - character segment that occurred to the right of the morpheme segment
 */
Morpheme.prototype.rules = function(strLeft,strRight) {
  this.left[strLeft] = this.left[strLeft] || {};
  this.left[strLeft][strRight] = this.left[strLeft][strRight] + 1 || 1;
  this.right[strRight] = this.right[strRight] || {};
  this.right[strRight][strLeft] = this.right[strRight][strLeft] + 1 || 1;
};

/**
 * Increments the number of instances of the morpheme (the number of times the same character segment occurred)
 */
Morpheme.prototype.instance = function() {
  this._instances += 1;
};


module.exports = Morpheme;
