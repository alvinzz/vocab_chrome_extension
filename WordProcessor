function filterParents(elements) {
  var leaves = [];
  for(var i = 0; i < elements.length; i++) {
    if(!document.getElementById(elements[i]).hasChildNodes()){
      leaves.add(elements[i]);
    }
    return leaves;
  }
}
function getWordList(leaves) {
  var wordlists = {};
  for(var i = 0; i < leaves.length; i++) {
    wordlists[leaves[i]] = document.getElementById(leaves[i]).split(" ");
  }
  return wordlists;
}
function tryGetReplace(word) {
  var isCapitalized = false;
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
  for(var i = 0; i < testedword.length; i++) {
    if(testedword.charCodeAt(i) < 65 || testedword.charCodeAt(i) > 90){
      return false;
    }
  }
  if(isSimple(testedword)) {
    return getSynonym(testedword);
  } else {
    return false;
  }
}
function isSimple(word) {

}
function getSynonym(word) {

}

var list = filterParents(document.getElementByTagName("*"));
var wordlists = getWordList(list);
