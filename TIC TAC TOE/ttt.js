let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");    //--- RESET BUTTON ---//
let player1=document.querySelector(".pr1");
let player2=document.querySelector(".pr2");
let winner1=document.querySelector(".cong1");
let winner2=document.querySelector(".cong2");
let Event=true;
let selection=true;
let congrats = true;
const winner=[
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [0 , 4 , 8],
];


const showWinner = (winner) => {
    if (congrats) {
        congrats = false;
        winner1.classList.remove("hide");
    } else {
        congrats = true;
        winner2.classList.remove("hide");
    }
}

const resetGame = () => {
    Event = true;
    congrats = false;
    // enableBoxes();
    reset.classList.add("hide");
    winner1.classList.add("hide");
    winner2.classList.add("hide");
}

const disableBoxes = () => {
    for (let box of boxes) {
        if (!box.disabled) { // Check if the box is not already disabled
            box.disabled = true;
            box.style.backgroundColor = "red";
        }
    }
}

// const enableBoxes = () => {
//     for (let box of boxes) {
//         if (!box.disabled) { // Check if the box is not already disabled
//             box.disabled = false;
//             box.innerText="";
//         }
//     }
// };

//--------FOR RESETING THE BUTTON-------//
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
    });
    resetGame(); // Assuming you want to call the resetGame function to reset the game state
});



           //------FOR CHECKING WINNER--//
const checkWinner=()=>{
    for(let pattern of winner){
        let pos0=boxes[pattern[0]].innerText;
        let pos1=boxes[pattern[1]].innerText;
        let pos2=boxes[pattern[2]].innerText;

        if(pos0!==""&& pos1!=="" && pos2!==""){
            if(pos0==pos1 && pos1==pos2){
                console.log("WINNER!WINNER!WINNER!" , pos0);
                showWinner();
                disableBoxes();
                
                
            }
        }
    }


    //----FOR RESETING THE GAME-----//
    const rechange=reset.addEventListener("click",()=>{
        console.log("hogya");
        boxes.innerText="";
        c        
    });

};
  //-------FOR PLAYING------//
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        console.log("box was clicked");
        box.style.backgroundColor = "white";
        if(Event){
           box.innerText="X";
           Event=false;
        }
        else{
            Event=true;
            box.innerText="O";
        }
        box.disabled=true;

        checkWinner();
       
    });
});

                       //-----FOR SELECTECT PLAYER------//
player1.addEventListener("click",()=>{
    player1.disabled=true;
    player1.style.backgroundColor="white";
    player1.style.color="red";
    if(selection){
        player1.innerText="X";
        selection=false;
    }
    else{
        selection=true;
        player2.disabled=true;
        
    }
    player2.innerText="O";
    
    
    
});

player2.addEventListener("click",()=>{
    player2.disabled=true;
    player2.style.backgroundColor="white";
    player2.style.color="red";
    if(selection){
        player2.innerText="X";
        selection=false;
    }
    else{
        selection=true;
       
    }
    player1.innerText="O";
    
});

          





