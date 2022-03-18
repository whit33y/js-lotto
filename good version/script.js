function mathRandom(){
return Math.ceil(Math.random()*49)
}
let losowe = []
for(let i=0; i<6; i++){
x = mathRandom();
if(losowe.includes(x)){i--}
else{losowe.push(x)}
}
console.log(losowe)
let form = document.getElementById('form')
function check(){
    list = []
    for(let i=0; i<6; i++){
      list[i] = document.getElementById('number'+i).value
    }
    for (i = 0; i < 6; i++) {
        for (j = i + 1; j < 6; j++) {
            if (i == j || list[i] == "" || list[j] == "") 
             continue;
         if (list[i] == list[j]) {
         document.getElementById("status" + i)
           .innerHTML = "Duplicated values!";
           list.push('false')
         document.getElementById("status" + j)
          .innerHTML = "Duplicated values!";
              }
          
          }   
      }
      trafione = 0
      if(list.length === 6){
          for(let i=0; i<6; i++){
              list[i] = parseInt(list[i])
          }
          for(let j=0; j<6; j++){
              for(let k=0;k<6;k++){
                  if(list[j]===losowe[k]){
                      trafione++
                  }
              }
          }
      }
    // list.pop()
    // list.pop()
    // list.pop()
    // list.push(parseInt(number0.value), parseInt(number1.value), parseInt(number2.value))
    // document.getElementById('shots').innerHTML = losowe
    if(list.length === 6){
    document.getElementById('onehelper').innerHTML = 'Your numbers'
    document.getElementById('yourShots').innerHTML = list
    document.getElementById('helper').innerHTML = 'Your hits'
    document.getElementById('goodShots').innerHTML = trafione
    for(let i=0; i<6; i++){
        document.getElementById("status" + i)
           .innerHTML = "";
    }
    }
}
form.addEventListener('submit',function(event){
    event.preventDefault()
    check()
    
})
