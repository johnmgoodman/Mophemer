
var morphemer = require('./morphemer'),

  /** An array of strings to parse */
  words = [
    "Aerin",  "Alanna", "Alixana",  "Althea", "Arya", "Daenerys",
    "Daine",  "Denna",  "Dionara",  "Elaira", "Elora",  "Eowyn",
    "Jaenelle", "Jame", "Kahlan", "Katsa",  "Keladry",  "Leia",
    "Lyanna", "Lyra", "Maerad", "Mara", "Meliara",  "Menolly",
    "Morgaine", "Phèdre", "Polgara",  "Raederle", "Renie",  "Sabriel",
    "Senneth",  "Shallin",  "Sorcha", "Thasha", "Torina", "Trinity",
    "Vin",  "Xena", "Yelena", "Zula", "Agate",  "Alyvia",
    "Arabeth",  "Ardra",  "Brenna", "Caryne", "Dasi", "Derris",
    "Dynie",  "Eryke",  "Errine", "Farale", "Gavina", "Glynna",
    "Karran", "Kierst", "Kira", "Kyale",  "Ladia",  "Mora",
    "Moriana",  "Quiss",  "Sadi", "Salina", "Samia",  "Sephya",
    "Shaundra", "Siveth", "Thana",  "Valiah", "Zelda",
    "Alaric", "Alaron", "Alynd",  "Asgoth", "Berryn", "Derrib",
    "Eryk", "Evo",  "Fausto", "Gavin",  "Gorth",  "Jarak",
    "Jasek",  "Kurn", "Lan",  "Ledo", "Lor",  "Mavel",
    "Milandro", "Sandar", "Sharn",  "Tarran", "Thane",  "Topaz",
    "Tor",  "Torc", "Travys", "Trebor", "Tylien", "Vicart",
  ],
  i=0,
  newWord;

/** Load words */
words.map(function(word) {
  morphemer.parseMorphemes(word,3);
});

for(; i < 10; i++) {
  /** Generate a word based on existing morphemes */
  newWord = morphemer.generateUtterance(3);
  console.log((words.indexOf(newWord) === -1 ? ' NEW ' : 'OLD  ') + newWord);
}
