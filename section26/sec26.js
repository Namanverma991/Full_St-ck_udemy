const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const p1display = document.querySelector("#p1display");
const p2display = document.querySelector("#p2display");
const resetbtn = document.querySelector("#reset");
const playto = document.querySelector("#playto")

let p1score = 0;
let p2score = 0;
let winningscore = 5;
let gameover = false;

//for p1 button
p1button.addEventListener("click", function() {
    if(!gameover){
        p1score++;
        if(p1score === winningscore){
            gameover = true;
            p1display.classList.add("winner");
            p2display.classList.add("loser");
        }
    }
    p1display.textContent = p1score;
})

//for p2 button
p2button.addEventListener("click", function() {
    if(!gameover){
        p2score++;
        if(p2score === winningscore){
            gameover = true;
            p2display.classList.add("winner");
            p1display.classList.add("loser");
        }
    }
    p2display.textContent = p2score;
})

//select value
playto.addEventListener("change", function(){
    winningscore = parseInt(this.value);
    reset();
})

//for reset button
resetbtn.addEventListener("click",reset)

function reset(){
    gameover = false;
    p1score = 0;
    p1display.textContent = p1score;
    p2score = 0;
    p2display.textContent = p2score;
    p1display.classList.remove("winner","loser")
    p2display.classList.remove("winner","loser")
}