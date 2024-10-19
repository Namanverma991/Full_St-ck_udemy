// function singsong(){
//     console.log("sa");
//     console.log("re");
//     console.log("mi");
// }
// singsong();

// function name(naam){
//     console.log(`naam bata ${naam}`);
// }

// DEFINE YOUR FUNCTION:
// DEFINE YOUR FUNCTION:
// function rant(message){
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }
// rant("I hate beets")

// function rant(message) {
//     for (let i = 0; i < 3; i++) {
//       console.log(message.toUpperCase());
//     }
// }
// rant("I hate beets")

// function name(phela, akhri){
//   console.log(`aage  ${phela} or piche  ${akhri[0]}`);
// }
// name("chal", "chutiye");
// console.log("muh me", "fir gand me");

// function repeat(str, runtime){
//   let result = " "
//   for(let i = 0; i < runtime; i++){
//     console.log("fuck you");
//     result += str
//   }
//   console.log(result)
// }

// // define isSnakeEyes below:
// function isSnakeEyes(num1, num2){
//   if(num1 === 1 && num2 === 1){
//     console.log("Snake Eyes")
//   }
//   else{
//     console.log("Not Snake Eyes")
//   }
// }

// function sum(x, y){
//   let sum = x + y;
//   return sum;
// }

function sum(x, y){
  if(typeof x !== "number" || typeof y !== "number"){
    return "Invalid input";
  }
  let sum = x + y;
  return sum;
}

// DEFINE YOUR FUNCTION BELOW:
function multiply(num1, num2){
  if(typeof num1 !== "number" || typeof num2 !== "number"){
      return invalid;
  }
  let multiply = num1 * num2
  return multiply
}

// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temp){
  if(temp >= 75){
      return true;
  }
  else{
      return false;
  }
} 

// DEFINE YOUR FUNCTION BELOW:
function lastElement(arr){
  if(arr.length === 0){
      return null;
  }
  else{
      return arr[arr.length - 1]
  }
}

// DEFINE YOUR FUNCTION BELOW:
function capitalize(word){
  return word[0].toUpperCase() + word.slice(1);
}

function sumArray(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }   
  return sum;
}

// DEFINE YOUR FUNCTION BELOW:
// DEFINE YOUR FUNCTION BELOW:
function returnDay(num){
  if (num < 1 || num > 7) {
    return null;
  } 
  else if (num === 1) {
    return ('Monday');
  } 
  else if (num === 2) {
    return ('Tuesday');
  } 
  else if (num === 3) {
    return ('Wednesday');
  } 
  else if (num === 4) {
    return ('Thursday');
  } 
  else if (num === 5) {
    return ('Friday');
  } 
  else if (num === 6) {
    return ('Saturday');
  } 
  else if (num === 7) {
    return ('Sunday');
  }
}
