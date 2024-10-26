// const req = new XMLHttpRequest();

// req.onload = function(){
//     console.log("its working");
//     console.log(this);
// }

// req.onerror = function(){
//     console.log("it error")
//     console.log(this)
// }

// req.open("GET", "https://swapi.dev/api/planets/1/");
// req.send();

// fetch("https://swapi.dev/api/planets/1/")
// .then((res) => {
//     console.log("resolve", res);
//     res.json().then((data) => console.log(("jsondone",data)));
// })
// .catch((e) => {
//     console.log("reject",e);
// });

// const loadstar = async () => {
//     try {
//         const res = await fetch("https://swapi.dev/api/planets/1/")
//         const data = await res.json();
//         const res2 = await fetch("https://swapi.dev/api/planets/2/")
//         const data2 = await res2.json();
//         console.log(data, data2);
//     }catch{
//         console.log("error",e);
//     }
// };

// loadstar();