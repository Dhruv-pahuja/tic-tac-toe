let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset');

let turnO = true;

const winPattern = [ [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8] ];

let winnerMsg = document.querySelector(".winner-msg");
let msg = document.querySelector("#msg");

function showWinner(winner){
    msg.innerText = `congrats!! our winner is ${winner}`;
    winnerMsg.classList.remove("hide");
}

function checkWinner(){
    for(let pattern of winPattern){
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO === true && box.innerText === ""){
            box.innerText = "O";
            turnO = false;
        } else if(turnO === false && box.innerText === ""){
            box.innerText = "X";
            turnO = true;
        }
        checkWinner();
    })
})

resetBtn.onclick = () =>{
    boxes.forEach((box) =>{
        box.innerText = "";
    })
    turnO = true;
    winnerMsg.classList.add("hide");
}