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

const delaycolorchange = ((newcolor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.background = newcolor;
        doNext();
    },delay)
})

delaycolorchange("aqua", 3000, () => {
    console.log("fuck fuck")
});

delaycolorchange("yellow",5000);