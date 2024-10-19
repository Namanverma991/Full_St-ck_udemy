// // //loops
// // for(let i = 1; i<= 10; i++){
// //     console.log(i);
// // }
// // for(let j = 1; j<= 10; j += 1){
// //     console.log("now i m bored: ", j);
// // }
// // for(let k = 0; k<= 10; k += 2){
// //     console.log("fuck you", k);
// // }
// // for(let l = 100; l >= 0; l -= 10){
// //     console.log(l);
// // }
// // for(let m = 10; m <= 10000; m *= 10){
// //     console.log(m);
// // }

// // const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // // WRITE YOUR LOOP BELOW THIS LINE:
// // for(let i = 0; i <= people.length; i++){
// //     console.log(people[i].toUpperCase());
// // }

// //nested loops
// // for(let i = 0; i <= 10; i++){
// //     console.log(`i is : ${i}`);
// //     for(let j = 1; j < 4; j++){
// //         console.log(`      j is : ${j}`);
// //     }
// // }

// // const name = [
// //     ["abc","def","ghi"],
// //     ["jkl","mno","pqr","stu"],
// //     ["vwx","yz"]
// // ]

// // for(let i = 0; i < name.length; i++){
// //     const row = name[i];
// //     console.log(`row is #${i +1}`);
// //     for(let j = 0; j < row.length; j++){
// //         console.log(row[j]);
// //     }
// // }

// //while loops
// // let i = 0;
// // while(i < 10){
// //     console.log(i);
// //     i++;
// // }

// // const num = "6";
// // let gusse = prompt("enter a number:");
// // while(gusse !== num){
// //     gusse = prompt("enter number: ");
// // }
// // console.log("congrats");

// //wrong
// // let target = Math.floor(Math.random() * 6);
// // let gusse = prompt("enter number btw 1 to 6: ");
// // while(true){
// //     // gusse = prompt("enter number btw 1 to 6: ");
// //     if (target === gusse){
// //         console.log("congrats")
// //         console.log(`target number is ${target} & gusse number is ${gusse}`);
// //         break;
// //     }
// //     else{
// //         console.log(`target number is ${target} & gusse number is ${gusse}`);
// //     }
// // }

// // let input = ("naman");
// // while(true){
// //     input = prompt(input);
// //     if(input.toLowerCase === "naman")
// //     break;
// // }

// // const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// // for(let i = 0; i < people.length; i++){
// //     console.log(people[i]);
// // }

// // for(let peoples of people){
// //     console.log(people);
// // }

// // for(let char of "naaman"){
// //     console.log(char);
// // }

// // const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!
// // // WRITE YOUR LOOP BELOW THIS LINE:
// // for(let num of numbers){
// //     console.log(num*num)
// // }

// //todo list
// let input = prompt("enter your item:");
// const todo = ["Scooby", "Velma"];
// while(input !== "quit" && input !== "q"){
//     if(input === "list"){
//         console.log("**********");
//         for(let i = 0; i < todo.length; i++){
//             console.log(`${i}. ${todo[i]}`)
//             }
//         console.log("**********");
//     }
//     else if(input === "add"){
//         const newlist = prompt("enter name:");
//         todo.push(newlist);
//         console.log(`${newlist} added to the list`)
//     }
//     else if(input === "delete"){
//         const indexstr = parseInt(prompt("enter name:"));
//         if(!number.isNaN(index)){
//             const deleted = todo.splice(index, 1);
//             console.log(`fuck off ${deleted[0]}`);
//         }else{
//             console.log("unknow")
//         }

//     }
//     input = prompt("tell me your item");
// }
// console.log("thank you and fuck you")