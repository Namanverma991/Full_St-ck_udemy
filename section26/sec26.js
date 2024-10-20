const p1 = {
    score : 0,
    button : document.querySelector("#p1button"),
    display : document.querySelector("#p1display")
}

const p2 = {
    score : 0,
    button : document.querySelector("#p2button"),
    display : document.querySelector("#p2display")
}

const resetbtn = document.querySelector("#reset");
const playto = document.querySelector("#playto")

let winningscore = 5;
let gameover = false;

function updatescore(player, oppenent){
    if(!gameover){
        player.score++;
        if(player.score === winningscore){
            gameover = true;
            player.display.classList.add("winner");
            oppenent.display.classList.add("loser");
            player.button.disabled = true;
            oppenent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

//for p1 button
p1.button.addEventListener("click", function() {
    updatescore(p1, p2)
})

//for p2 button
p2.button.addEventListener("click", function() {
    updatescore(p2,p1)
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
    p1.score = 0;
    p1.display.textContent = p1.score;
    p2.score = 0;
    p2.display.textContent = p2.score;
    p1.display.classList.remove("winner","loser")
    p2.display.classList.remove("winner","loser")
    p1.button.disabled = false;
    p2.button.disabled = false;
}
