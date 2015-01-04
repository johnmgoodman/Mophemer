Morpheme = require('./Morpheme');


module.exports = (function() {

  var MaxMLength,

    /**
     * [segments description]
     * @param  {[type]}  str    [description]
     * @param  {Boolean} isLeft [description]
     * @return {[type]}         [description]
     */
    segments = function(str,isLeft) {
      var mlen = 1,
        segments = [];
      

      for(; mlen <= MaxMLength; mlen += 1) {
        segments.push(isLeft? str.substr(-mlen) : str.substr(0,mlen));
      }
      
      return segments;
    }

    
    /**
     * Create Morphemes for all consecutive mlen-length character segments in word
     * @param  {[type]} word - the string to iterate
     * @param  {[type]} mlen - the number of characters for each segment
     */
    iterateSegment = function(word, mlen) {
      var wordLength = word.length,
        segCount = wordLength - mlen + 1,
        segIndex = 0,
        search,
        result,
        allLeft,
        allRIght,
        morpheme;

      for(;segIndex < segCount; segIndex += 1) {
        search = new RegExp("(.{"+segIndex+"})(.{"+mlen+"})(.*)");
        result = search.exec(word);
        morpheme = new Morpheme(result[2]);
        allLeft = segments(result[1],true);
        allRight = segments(result[3],false);

        allLeft.map(function(leftStr) {
          allRight.map(function(rightStr) {
            morpheme.rules(leftStr,rightStr);
          });
        });
      }
    };



  /**
   * Create Morphemes for every character segment in a string up to a maximum length
   * @param  {[type]} word - the string to parse
   * @param  {[type]} maxMLength - maximum charactar segment length
   */
  return function parseMorphemes(word, maxMLength) {
    var mLength = 1,
      mString;
    MaxMLength = maxMLength;
    for(;mLength <= maxMLength; mLength += 1) {
      allLeft = []; allRight = [];
      iterateSegment(word, mLength);
    }
  };
  
})();
