// const num = [1,2,3,4,5,6,7,8,9,0]
// // function print(element){
// //     console.log(element);
// // }
// // num.forEach(print);
// // num.forEach(function (el){
// //     console.log(el);
// // }

// const double = num.map(function (el){
//     return el * 2;
// })

// // DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// // Write your code here
// const firstNames = fullNames.map(function(name){
//     return name.first
// })

// const squ = (x) => {
//     return x * x;
// }

// const add = (x, y) => {
//     return x + y;
// }

// const rolldie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// const greet = (x) => {
//     return `Hey ${x}`;
// }

// setTimeout (() => {
//     console.log("chala ja bkl");
// }, 2000)

// const nums = [1,2,3,4,5,6,7,8,9,0];
// const odd = nums.filter(n => {
//     return n % 2 === 1;
// })
// console.log(odd);
// const smallnums = nums.filter(n => n < 5)
// console.log(smallnums);

// const usernames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']
// const validUserNames = usernames.filter(u => {
//     return u.length < 10
// })
// console.log(validUserNames);

// const usernames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']
// const word = usernames.some(n => n.length < 10);
// let letter = usernames.some(i => i[0] === "A");
// let use = usernames.every(k => k >= 5);
// console.log(use)
// console.log(letter)
// console.log(word)

// const allEvens = [1,2,3,4,5,6,7,8,9]
// let even = allEvens.some(a => {
//     return a % 2 === 0
// });

const prices = [1,2,3,4,5,6,7,8,9,0];
// let total = 0;
// for (let price of prices){
//     total += price;
// }
// console.log(total)
let total = prices.reduce((total, prices) => {
    return total + prices
})

const min = prices.reduce((min, price) => {
    if(price < min){
        return price;
    }
    return min;
})

const max = prices.reduce((max, price) => {
    if(price > max){
        return price;
    }
    return max;
})