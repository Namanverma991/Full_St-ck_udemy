// const multiply = (x, y) => x * y;

// const square = x => multiply(x, x);

// const isRightTriangle = (a, b, c) => {
//     return square(a) + square(b) === square(c)
// }
// isRightTriangle(3,4,5)

// console.log("hii fucker!!!")
// setTimeout(() => {
//     document.body.style.background = "aqua";
//     setTimeout(() => {
//         document.body.style.background = "red";
//     },2000)
// },5000)

// const delaycolorchange = ((newcolor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.background = newcolor;
//         doNext();
//     },delay)
// })

// delaycolorchange("aqua", 3000, () => {
//     console.log("fuck fuck")
// });

// delaycolorchange("yellow",5000);

//fake request using callback
// const fakerequestcallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000){
//             failure("connection timeout")
//         }
//         else{
//             success(`connected successfully ${url}`)
//         }
//     }, delay)
// }

// const fakerequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000){
//                 reject("common timeout")
//             }
//             else{
//                 resolve(`here your problem resolve ${url}`)
//             }
//         }, delay)
//     })
// }

// fakerequestcallback("book.com", function(response){
//     console.log("connected successfully")
//     console.log(response)
// }, function(err){
//     console.log("connection failed",err)
// })

// const fakerequest = (url) => {
//     return new  Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7){
//                 resolve(`connected successfully ${url}`)
//             }
//             else{
//                 reject("connection failed")
//             }
//         }, 1000)
//     })
// }

// fakerequest("./dog1/1")
// .then(() => {
//     console.log("resolved")
//     console.log("data is:", data)
// })
// .catch((err) => {
//     console.log("rejected",err)
// })

const sing = async() => {
    return "hhhhhh"
}