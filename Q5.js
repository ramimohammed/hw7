// javascript 

var numbers = [17, 24, 4, 26, 19, 30, 2, 66, 40];
var evenNumbers = [];
var oddNumbers = [];

function classifyNumbers(arr){

  for(var i=0; i<=arr.length-1; i++){
     if (arr[i] % 2 === 0 ){
        
        evenNumbers.push(arr[i]);
     } else {
       
        oddNumbers.push(arr[i]);
     }
  }
}

classifyNumbers(numbers);

console.log('Even numbers: ' + evenNumbers);
console.log('Odd numbers: ' + oddNumbers);

var b=0;
