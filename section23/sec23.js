function rolldie(numsize){
    if(numsize === undefined){
        numsize = 6;
    }
    return Math.floor(Math.random() * numsize) + 1;
}

function greet(msg = "hiii", person, puch = "!"){
    console.log(`${msg} ${person} ${puch}`);
}

let nums = [4,5,3,7,2,9]
let max = Math.max(...nums)
console.log(max);

function createhelloworld(){
    return "Hello World";
}

function sumall(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
sumall(9,8,7,6,5)

const score = [1,2,3,4,5,6]
const low = score[0];
const high = score[score.length - 1];
const [gold, silver, chu, gan, lan] = score;

const user = {
    name: "John",
    age: 30,
    occupation: "Developer",
    hobbies: ["reading", "coding", "gaming"]
}

const {name, age, occupation, hobbies} = user;