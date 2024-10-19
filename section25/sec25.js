// const btn = document.querySelector("#v2");
// // console.dir(btn)

// btn.onclick = function(){
//     console.log("you again fucked")
//     console.log("i hope noe you satisfy")
// }

// function screm(){
//     console.log("oh yes !")
//     console.log("come on fuck me hard")
// }

// btn.onmouseenter = screm;

// document.querySelector("#v3").onclick = () => {
//     console.log("choke me bby")
// }

// const bb4 = document.querySelector("#v4");
// bb4.addEventListener("click", () => {
//     console.log("i fuck you")
// })


// function shout(){
//     console.log("doggystyle")
// }
// function twist(){
//     console.log("twist me bby")
// }
// const tas = document.querySelector("#v5")
// tas.addEventListener("click",shout, {once : true})
// tas.addEventListener("click",twist)

// const button = document.querySelector("button")
// const h1 = document.querySelector("h1")
// button.addEventListener("click", function (){
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     const newcolor = `rgb(${r}, ${g}, ${b})`;
//     document.body.style.background = newcolor;
//     h1.innerText = newcolor;
// })

// const makeraand = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// const buttons = document.querySelectorAll("button")

// for(let button of buttons){
//     button.addEventListener("mouseenter", function(){
//         console.log("gandu");
//         button.style.backgroundColor = makeraand();
//         button.style.color = makeraand();
//     })
// }

// const h1s = document.querySelectorAll("h1");
// for(let h1 of h1s){
//     h1.addEventListener("mouseenter", function(){
//         console.log(this);
//         this.style.backgroundColor = makeraand();
//         h1.style.color = makeraand();
//     })
// }

// document.querySelector("button").addEventListener("click", function(){
//     alert("tu fir aa gya gandu")
// })

// const input = document.querySelector("input")
// // input.addEventListener("keydown", function(){
// //     console.log("hii")
// // })
// // input.addEventListener("keyup", function(){
// //     console.log("fucker")
// // })
// input.addEventListener("keydown", function(e){
//     // console.log(e.key)
//     // console.log(e.code)
//     switch (e.code){
//         case "ArrowUp":
//             console.log("up");
//             break;
//         case "ArrowDown":
//             console.log("down");
//             break;
//         case "ArroWLeft":
//             console.log("left");
//             break;
//         case "ArrowRight":
//             console.log("right");
//             break;
//         default:
//             console.log("ignore")
//     }
// })


// wrong code
// const form = document.querySelector("#shelterForm");
// const input = document.querySelector("#catsname");
// const list = document.querySelector("#list");
// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     const catname = input.value;
//     const newli = document.querySelector("li");
//     newli.innerText = catname;
//     console.log(newli);
//     list.append(newli);
// })


// right one
// const form = document.querySelector('form');
// const ul = document.querySelector('#list');
 
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const qty = form.elements.qty.value;
//   const product = form.elements.product.value;
//   const li = document.createElement('li');
//   li.innerText = `${qty} ${product}`;
//   ul.appendChild(li);
//   form.reset();
// });

// const input = document.querySelector("input")
// const h1 = document.querySelector("h1")
// input.addEventListener("change", function() {
//   console.log("fuck fuck")
// })
// input.addEventListener("input", function() {
//   h1.innerText = input.value
// })

