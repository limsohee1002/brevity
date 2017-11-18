module.exports = var deepEquals = function(a, b) {
  let aKeys = Object.keys(a).sort().toString(); //string of a keys
  let bKeys = Object.keys(b).sort().toString(); //string of b keys
  let aArray = JSON.stringify(Object.values(a).sort()); //sort a values
  let bArray = JSON.stringify(Object.values(b).sort()); //sort b values 
  //this works because if the values are the same they will sort the same
  //despite the shortcomings of the sort function 
  if(aKeys === bKeys && aArray === bArray) { //check if equal 
    return true;
  } else {
    return false;
  }
};