//Return only elements which have no children
function filterParents(elements) {
  var leaves = [];
  for(var i = 0; i < elements.length; i++) {
    if(!document.getElementById(elements[i]).hasChildNodes()){
      leaves.add(elements[i]);
    }
    return leaves;
  }
}
//Return an object with the list of words corresponding to each element id
function getWordList(leaves) {
  var wordlists = {};
  for(var i = 0; i < leaves.length; i++) {
    wordlists[leaves[i]] = document.getElementById(leaves[i]).innerHTML.split(" ");
  }
  return wordlists;
}
//If the word is simple and contains no non-letters, replace it with a synonym
function tryGetReplace(word) {
  var isCapitalized = false;
  var capital = "A";
  var start;
  var end;
  for(var i = 0; i < word.length; i++) {
    if(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
      isCapitalized = true;
      start = i;
      break;
    }
    if(word.charCodeAt(i) >= 97 && word.charCodeAt(i)<= 122) {
      start = i;
      break;
    }
  }
  for(var i = word.length; i >= 0; i++) {
    if((word.charCodeAt(i) >= 97 && <= 122) || (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90)) {
      end = i;
      break;
    }
  }
  var testedword = word.splice(start,end+1).toLowerCase();
  var firstchars = word.splice(0,start);
  var lastchars = word.splice(end+1);
  for(var i = 0; i < testedword.length; i++) {
    if(testedword.charCodeAt(i) < 65 || testedword.charCodeAt(i) > 90){
      return false;
    }
  }
  if(isSimple(testedword)) {
    var rawreplacement = getSynonym(testedword);
    var replacement;
    if(isCapitalized) {
      replacement = firstchars.concat(capital,rawreplacement.splice(1),lastchars);
    }
    else {
      replacement = firstchars.concat(rawreplacement,lastchars);
    }
    return replacement;
  } else {
    return false;
  }
}
//Test whether a word is simple enough to replace and not on blacklist
function isSimple(word) {
  var rank = 0;
  if(word in frequencylist) {
    rank = frequencylist[word];
  }
  if(rank > 50 && rank < 1000) {
    return true;
  }
  return false;
}
//Get a synonym for a word
function getSynonym(word) {

}
//Replace approximately every nth word in an array of words with a synonym
function replaceWords(wordlist, n) {
  var index = 0;
  index += parseInt(Math.random()*n);
  while(index < wordlist.length) {
    var replacement = tryGetReplace(wordlist[index]);
    if(replacement) {
      wordlist[index] = replacement;
      index += parseInt(Math.random()*1.5*n);
    }
    else {
      index += 1;
    }
  }
}
//Turn an array of words back to a paragraph of text
function backToText(wordlist) {
  var string = wordlist[0];
  for(var i = 1; i < wordlist.length; i++) {
    string.concat(" ", wordlist[i]);
  }
  return string;
}
var frequencylist = JSON.parse(frequencylist.json);
var list = filterParents(document.getElementByTagName("*"));
var wordlists = getWordList(list);
var textlist = {};
for(id in wordlists) {
  replaceWords(wordlists[id], 7);
  document.getElementById(id) = backToText(wordlists[id]);
}
