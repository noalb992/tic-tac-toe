function init(){
     const boxes = document.querySelectorAll('.box')
     const resetButton = document.querySelector('#restart')
     const winnerDiv = document.querySelector('#winner')
     let player = 'X'

     let board = ['','','','','','','','','']
     const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ]
let user = []


   // const fullArr = board.concat(combinations)
//1. make a new variable an array 
//2. push inside whatever the user clicks (push)
//3, compare the array of user clicks with the wining combination. 
// 1. in the checkWin function make a for(let i = 0; i <= combinations.length; i++){} loop or .forEach()

//2. take each element 

    function checkWin (){
   
    }

   // this box
   boxes.forEach(box => {
      box.addEventListener('click', handleClick)
     })

     function handleClick(){
      if(this.textContent===''){
         this.textContent = player
         user.push()
      player = player ==="X" ? "O" : "X"
      } 
      // console.log(fullArr);
     } 

     resetButton.addEventListener('click',resetBoard)
      function resetBoard() {
      boxes.forEach(box => {
         box.textContent = ""
      })
     }
}


window.addEventListener('DOMContentLoaded', init)