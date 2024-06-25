// Select All Boxes
let boxes = document.querySelectorAll(".box");

// Select Reset Button
let resetBtn = document.querySelector("#reset-btn");

let turnO = true; //playerX  playerO

// Select New Button
let newBtn=document.querySelector("#new-btn")

// Select Msg-Container
let msgContainer=document.querySelector(".msg-container")

// Select Msg
let msg=document.querySelector("#msg")
// Stores all Winning Patterns
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let count=0;
// Add Event to all boxe
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count++;
    if(count==9){
      msgContainer.classList.remove("hide")
      msg.innerHTML="Game was draw"
    }
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const resetGame=()=>{
    turnO=true
    count=0
    enabledBoxes();
    msgContainer.classList.add("hide")
}

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerHTML=""
    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`Congratulations the winner is ${winner}`
    msgContainer.classList.remove("hide")
    disabledBoxes();
}

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
    }
  }
};

newBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)