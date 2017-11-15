module.exports.bubbleSort = {'func': `function(array) {
  while(true){
    var atLeastOneSort = false;
    for(var i = 1; i < array.length; i++){
      if(array[i-1] > array[i]){
        //var temp = array[i-1];
        array[i-1] = array[i];
        array[i] = temp;
        atLeastOneSort = true;
      }
    }
    
    if(atLeastOneSort === false){
      return array;
    }
  }
};`};