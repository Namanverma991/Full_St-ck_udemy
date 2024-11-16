const express = require("express");
const app = express();
const path = require("path");

app.set("views engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/",(req, res) => {
    res.render("home.ejs");
    
})

app.get("/.cats",(req,res) => {
    const cats = [
        "max", "wax", "tax", "hax"
    ]
    res.render("cats.ejs", { cats });
})

app.get("/.rand",(req,res) =>{
    const num = Math.floor(Math.random() * 100) + 1;
    res.render("random.ejs", { num });
})


app.listen(3001, () => {
    console.log("bye");
})

