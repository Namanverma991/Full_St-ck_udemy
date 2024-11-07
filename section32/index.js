const express = require('express');
const app = express()
// console.dir(app)

// app.use((req,res)=>{
//     console.log("you runied it")
//     res.send("why you do it bastard")
// })

app.get("/.cats/",(res,req) => {
    res.send("meow")
})

app.get("/dogs",(res,req) => {
    res.send("woof")
})

app.listen(8080, () => {
    console.log("hiii buddy")
})