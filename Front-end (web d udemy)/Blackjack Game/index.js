let player={
  name:"Shivangi",
  chips:300
}
console.log(player.name)
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.name+": $ "+player.chips


let cards=[]
let sum=0
let isAlive=false
let hasBlackJack=false
let message=" "

let mainMessageEl = document.getElementById("mainMessage-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")


function randomNum()
{
  let x=Math.floor(Math.random()*13)+1
  if(x>10)
  {
    return 10
  }
  else if(x===1)
  {
    return 11
  }
  else
  {
  return x;
  }
}

function startGame()
{
  isAlive=true
  let firstCard=randomNum()
  let seconcard=randomNum()

   cards=[firstCard,seconcard]
   sum=firstCard+seconcard;

  renderGame()
}
function renderGame()
{


  cardsEl.textContent="Cards: "

  for(let i=0;i<cards.length;i++)
  {
    cardsEl.textContent+=cards[i]+" "
  }

  sumEl.textContent="Sum: " + sum

  if(sum <= 20)
  {
    message = "Do you want to pick new card ? 🙂"
  }
  else if(sum === 21)
  {
    message = "Wohoo! You've got a Blackjack 🥳"
    hasBlackJack=true
  }
  else
  {
    message = "You're out of the game , better luck next time 😭"
    isAlive=false;
  }

 mainMessageEl.textContent=message

}

function newcard()
{


   if(isAlive===true && hasBlackJack===false)
   {
    let thirdCard=randomNum()
   cards.push(thirdCard)
   sum=sum+thirdCard
   sumEl.textContent="Sum: " + sum
   renderGame()
   mainMessageEl.textContent=message
 }
}
