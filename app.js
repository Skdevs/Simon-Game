let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "green", "blue" ]
let h2 = document.querySelector("h2");
//this for start the game
document.addEventListener("keypress", ()=>{
    if(started == false){
        console.log("started");
        started = true;
        levelUp();
    }
});

//this is for flash the button

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

//this is for level up and rendom color

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random color code
    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn); 
    gameSeq.push(randomColor);
    console.log(gameSeq) 
    gameFlash(randomBtn);
}

function checkAns(idx) {
    // console.log("current level", level);
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000 )
        }
    } else{
        h2.innerHTML = `Game Over! your score was <b>${level}</b> <br>Press any key to start!`
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    //console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}