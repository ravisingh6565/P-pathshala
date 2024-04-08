let arr = [ 2,10,21,31];
function printPretty(elem){
 console.log(':', elem);
}
function printArray(arr){
arr.forEach(printPretty);
 
}

printArray(arr);