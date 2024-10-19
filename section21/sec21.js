// function totalaand(){
//     let aand = 2;
//     console.log(aand)
// }

// const bird = "parrot";
// function birdwatch(){
//     let bird = "totta";
//     console.log(bird);
// }
// bird();
// birdwatch();
// console.log(bird);

// for(let i = 0; i <= 5; i++){
//     var mes = "bcshsk";
//     console.log(mes);
// }
// console.log(mes);
// console.log(i);

// function hero(){
//     const ourheros = ["deadpool", "batman", "superman", "krish"]
//     function helpme(){
//         function inner(){
//             for(let ourhero of ourheros){
//                 console.log(`hero please help me ${ourhero.toUpperCase()}`);
//             }
//         }
//         inner();
//     }
//     helpme();
// }

// const add = function(x, y){
//     return x + y;
// }

// function square(x){
//     let square = Math.pow(x, 2);
//     return square;
// }

// function calltwice(func){
//     func();
//     func();
// }

// function calltentimes(f){
//     for(let i = 0; i < 10; i++){
//         f();
//     }
// }

// function rolldie(){
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }
// calltwice(rolldie);

// function makefun(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log("fuck me please")
//         }
//     }
//     else{
//         return function(){
//             console.log("i fuck you")
//         }
//     }
// }

const square = {
    area(side){
        return side * side;
    },
    perimeter(side){
        return side * 4;
    }
}

const cat = {
    name: "billy",
    age: 5,
    breed: "street",
    meow(){
        console.log(this.name);
    }
}

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg: function(){
        this.eggCount += 1;
        return 'EGG';
    }
}

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }
    catch (e){
        console.log(e);
        console.log("enter a string")
    }
}
yell("fuck me !!!")