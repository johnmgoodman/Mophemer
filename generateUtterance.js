module.exports = (function() {

  /**
   * Retrieve the object's property keys as an array.
   * @param  {Object} obj - a simple object
   * @return {Array} keys - an array of the object's property keys
   */
  var get_keys = function(obj) {
      var key,
        keys = [];

        for(key in obj) {
          if(obj.hasOwnProperty(key)) {
            keys.push(key);
          }
        }

        return keys;
    },

    /**
     * Returns a randomly selected item from an array
     * @param  {Array} array - the array
     * @return {*} - the item
     */
    array_rand = function(array) {
      return array[Math.floor(Math.random() * array.length)];
    },


    /**
     * Returns a list of word-initial morphemes that exist in a given list of morphemes
     * @param  {Array} allMorphemes - a list of morphemes
     * @return {Array} subset of allMorphemes containing only word-initial morphemes
     */
    wordInitialMorphemes = function(allMorphemes) {
      var key, wims = [];

      for(key in allMorphemes) {
        if(allMorphemes.hasOwnProperty(key)) {
          if(typeof allMorphemes[key].left[''] !== 'undefined') {
            wims.push(key);
          }
        }
      }
      return wims;
    };


  /**
   * Generate an utterance based on all loaded Morphemes
   * @param  {Number} maxsize - morpheme count at which to start favoring word-final morphemes
   * @return {String} new utterance built up of existing morphemes
   */
  return function generateUtterance(maxsize) {
    var allMorphemes = Morpheme.morphemes,
      morphemeKeys = get_keys(allMorphemes),
      useMorphemes = [],
      morpheme,
      next = array_rand(wordInitialMorphemes(allMorphemes)),
      left = '',
      count = 0;

      while(next !== '') {
        morpheme = allMorphemes[next];
        useMorphemes.push(morpheme);
        rights = get_keys(morpheme.left[left]);
        left = morpheme.morpheme;
        if(count++ >= maxsize && rights.indexOf('') !== -1) {
          next = '';
        } else {
          next = array_rand(rights);
        }
      }

    mstrs = useMorphemes.map(function(m){ return m.morpheme; });
    return mstrs.join('');
  };
})();
