function mathRandom(){
return Math.ceil(Math.random()*49)
}
let randomSix = []
for(let i=0; i<6; i++){
x = mathRandom();
if(randomSix.includes(x)){i--}
else{randomSix.push(x)}
}
console.log(randomSix)

let form = document.getElementById('form')
function addAndCheck(){
    yourNumbers = []
    for(let i=0; i<6; i++){yourNumbers[i] = document.getElementById('number'+i).value}
    for (i = 0; i < 6; i++) {
        for (j = i + 1; j < 6; j++) {
            if (i == j || yourNumbers[i] == "" || yourNumbers[j] == "") 
             continue;
         if (yourNumbers[i] == yourNumbers[j]) {
         document.getElementById("status" + i)
           .innerHTML = "Duplicated values!";
           yourNumbers.push('false')
         document.getElementById("status" + j)
          .innerHTML = "Duplicated values!";
              }
          }   
      }
      hits = 0
      if(yourNumbers.length === 6){
        document.getElementById('onehelper').innerHTML = 'Your numbers'
          for(let i=0; i<6; i++){
              yourNumbers[i] = parseInt(yourNumbers[i])
          }
          document.getElementById('yourShots').innerHTML = yourNumbers
          for(let j=0; j<6; j++){
              for(let k=0;k<6;k++){
                  if(yourNumbers[j]===randomSix[k]){
                    document.getElementById("number"+j).style.borderColor="green"
                    document.getElementById("number"+j).style.backgroundColor="green"
                    document.getElementById("number"+j).style.color="white"
                    document.getElementById("number"+j).disabled=true
                      hits++
                      break
                  }
                  else{
                    document.getElementById("number"+j).style.borderColor="red"
                  }
              }
          }
          document.getElementById('helper').innerHTML = 'Your hits'
          document.getElementById('goodShots').innerHTML = hits
          if(hits===6){
            document.getElementById('goodShots').innerHTML = 'YOU WIN!'
          }
          for(let i=0; i<6; i++){
            document.getElementById("status" + i)
               .innerHTML = "";
        }
      } 
}
form.addEventListener('submit',function(event){
    event.preventDefault()
    addAndCheck()
    
})
