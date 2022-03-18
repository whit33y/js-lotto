function sortNum (a, b) {
    return a - b;
  }
function mathRandom(){
    return Math.ceil(Math.random()*49)
}

let lista = []
for(let i=0; i<6; i++){
x = mathRandom();
if(lista.includes(x)){i--}
else{lista.push(x)}
}

lista.sort(sortNum)
document.getElementById("one").innerHTML = lista[0];
document.getElementById("two").innerHTML = lista[1];
document.getElementById("three").innerHTML = lista[2];
document.getElementById("four").innerHTML = lista[3];
document.getElementById("five").innerHTML = lista[4];
document.getElementById("six").innerHTML = lista[5];
let wybrane = []

//pierwsza
let pierwsza = parseInt(window.prompt('Podaj liczbę 1'))
let zmienna = false
if(Number.isInteger(pierwsza)){
    zmienna=true}
while((pierwsza<0)||(pierwsza>=50)||zmienna!==true||wybrane.includes(pierwsza)===true){
 pierwsza = parseInt(window.prompt('Zle podales liczbe, podaj jeszcze raz'))
 if(Number.isInteger(pierwsza)){
    zmienna=true}}
wybrane.push(pierwsza)

//druga
let druga = parseInt(window.prompt('Podaj liczbę 2'))
zmienna = false
if(Number.isInteger(druga)){
    zmienna=true}
while((druga<0)||(druga>=50)||zmienna!==true||wybrane.includes(druga)===true){
 druga = parseInt(window.prompt('Zle podales liczbe, podaj jeszcze raz'))
 if(Number.isInteger(druga)){
    zmienna=true}}
wybrane.push(druga)
//trzecia
let trzecia = parseInt(window.prompt('Podaj liczbę 3'))
zmienna = false
if(Number.isInteger(trzecia)){
    zmienna=true}
while((trzecia<0)||(trzecia>=50)||zmienna!==true||wybrane.includes(trzecia)===true){
 trzecia = parseInt(window.prompt('Zle podales liczbe, podaj jeszcze raz'))
 if(Number.isInteger(trzecia)){
    zmienna=true}}
wybrane.push(trzecia)
//czwarta
let czwarta = parseInt(window.prompt('Podaj liczbę 4'))
zmienna = false
if(Number.isInteger(czwarta)){
    zmienna=true}
while((czwarta<0)||(czwarta>=50)||zmienna!==true||wybrane.includes(czwarta)===true){
 czwarta = parseInt(window.prompt('Zle podales liczbe, podaj jeszcze raz'))
 if(Number.isInteger(czwarta)){
    zmienna=true}}
wybrane.push(czwarta)
//piata
let piata = parseInt(window.prompt('Podaj liczbę 5'))
zmienna = false
if(Number.isInteger(piata)){
    zmienna=true
}
while((piata<0)||(piata>=50)||zmienna!==true||wybrane.includes(piata)===true){
 piata = parseInt(window.prompt('Zle podales liczbe, podaj jeszcze raz'))
 if(Number.isInteger(piata)){
    zmienna=true}}
wybrane.push(piata)
//szosta
let szosta = parseInt(window.prompt('Podaj liczbę 6'))
zmienna = false
if(Number.isInteger(szosta)){
    zmienna=true}
while((szosta<0)||(szosta>=50)||zmienna!==true||wybrane.includes(szosta)===true){
 szosta = parseInt(window.prompt('Zle podales liczbe, podaj jeszcze raz'))
 if(Number.isInteger(szosta)){
    zmienna=true}}
wybrane.push(szosta)

let strzaly = []
strzaly.push(pierwsza)
strzaly.push(druga)
strzaly.push(trzecia)
strzaly.push(czwarta)
strzaly.push(piata)
strzaly.push(szosta)
let powtorzenia = 0
for(let i=0; i<6; i++){
    for(let j=0; j<6; j++){
        if(lista[i]==strzaly[j]){
            powtorzenia++
        }
    }
}
document.getElementById("powtorzenia").innerHTML = powtorzenia;
document.getElementById("oneS").innerHTML = strzaly[0];
document.getElementById("twoS").innerHTML = strzaly[1];
document.getElementById("threeS").innerHTML = strzaly[2];
document.getElementById("fourS").innerHTML = strzaly[3];
document.getElementById("fiveS").innerHTML = strzaly[4];
document.getElementById("sixS").innerHTML = strzaly[5];



