function init() {
   const boxes = document.querySelectorAll('.box')
   const resetButton = document.querySelector('#restart')
   const winnerDiv = document.querySelector('#winner')
   let player = 'X'

   
   
   boxes.forEach((box) => {
      box.addEventListener('click', handleClick)
  })
  function handleClick(event) {
      if (checkWin()) {
          return
      }
      if (event.target.textContent === "") {
          event.target.textContent = player
          player = player === 'X' ? 'O' : 'X'
          checkWin()
      }
  }

   function checkWin() {
      if (boxes[0].innerHTML === 'X' && boxes[1].innerHTML === 'X' && boxes[2].innerHTML === 'X') {
         console.log(boxes[0].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[0].innerHTML + ''
         return true
     } if (boxes[3].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[5].innerHTML === 'X') {
         console.log(boxes[3].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[3].innerHTML + ''
         return true
     } else if (boxes[6].innerHTML === 'X' && boxes[7].innerHTML === 'X' && boxes[8].innerHTML === 'X') {
         console.log(boxes[6].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[6].innerHTML + ''
         return true
     } else if (boxes[0].innerHTML === 'X' && boxes[3].innerHTML === 'X' && boxes[6].innerHTML === 'X') {
         console.log(boxes[0].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[0].innerHTML + ''
         return true
     } else if (boxes[1].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[7].innerHTML === 'X') {
         console.log(boxes[1].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[1].innerHTML + ''
         return true
     } else if (boxes[2].innerHTML === 'X' && boxes[5].innerHTML === 'X' && boxes[8].innerHTML === 'X') {
         console.log(boxes[2].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[2].innerHTML + ''
         return true
     } else if (boxes[0].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[8].innerHTML === 'X') {
         console.log(boxes[0].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[0].innerHTML + ''
         return true
     } else if (boxes[2].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[6].innerHTML === 'X') {
         console.log(boxes[2].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[2].innerHTML + ''
         return true
     }
     if (boxes[0].innerHTML === 'O' && boxes[1].innerHTML === 'O' && boxes[2].innerHTML === 'O') {
         console.log(boxes[0].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[0].innerHTML + ''
         return true
     } if (boxes[3].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[5].innerHTML === 'O') {
         console.log(boxes[3].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[3].innerHTML + ''
         return true
     } else if (boxes[6].innerHTML === 'O' && boxes[7].innerHTML === 'O' && boxes[8].innerHTML === 'O') {
         console.log(boxes[6].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[6].innerHTML + ''
         return true
     } else if (boxes[0].innerHTML === 'O' && boxes[3].innerHTML === 'O' && boxes[6].innerHTML === 'O') {
         console.log(boxes[0].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[0].innerHTML + ''
         return true
     } else if (boxes[1].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[7].innerHTML === 'O') {
         console.log(boxes[1].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[1].innerHTML + ''
         return true
     } else if (boxes[2].innerHTML === 'O' && boxes[5].innerHTML === 'O' && boxes[8].innerHTML === 'O') {
         console.log(boxes[2].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[2].innerHTML + ''
         return true
     } else if (boxes[0].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[8].innerHTML === 'O') {
         console.log(boxes[0].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[0].innerHTML + ''
         return true
     } else if (boxes[2].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[6].innerHTML === 'O') {
         console.log(boxes[2].innerHTML + 'has won')
         winnerDiv.innerHTML = boxes[2].innerHTML + ''
         return true
     }
   }



   function resetBoard() {
      boxes.forEach(box => {
         box.textContent = ""
         winnerDiv.textContent = ""
      })
   }
   resetButton.addEventListener('click', resetBoard)
}


window.addEventListener('DOMContentLoaded', init) 