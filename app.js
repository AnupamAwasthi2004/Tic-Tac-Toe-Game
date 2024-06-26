let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let tie_match = document.querySelector(".tie_match");
let tie = document.querySelector("#tie");


let turn0 = true;

 
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]    
];

const resetGame = () =>{
    let turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    tie_match.classList.add("hide");
}

  boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turn0 == true){
        box.innerText = "O";
        turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.displayed = true;


        checkWinner();
    });
  });

  const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
  }

  const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
  }

  const showWinner = (winner) =>{
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
  }
  const check = () => {
    for(let box of boxes){
        if(box.innerText != ""){
            box.disabled = true;
        }
    }
  };

  const check_Tie = () => {
    let count = 0;
    for(let box of boxes){
        if(box.innerText != ""){
            count++;
        }
    }
      if(count === 9){
        tie.innerText = "Tie";
        tie_match.classList.remove("hide");
        disableBoxes();
      } 
   };
  
  const checkWinner = () =>{
    check();
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
            else{
                check_Tie();
            }
        }
    }
  };


  newGameBtn.addEventListener("click",resetGame);
  resetBtn.addEventListener("click",resetGame);