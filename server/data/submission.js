module.exports = commonCharacters = function(string1, string2){
  let res = '';
  const hash = {};
  string1 = string1.replace(/ /g, '')
  // hash table to store chars we've seen
  // iterate over string1
  for (var i = 0; i < string1.length; i++) {
    var char = string1[i];
    if (!hash[char] && string2.includes(char)) {
      res += char;
      hash[char] = true;
    }
  }
  return res;
}