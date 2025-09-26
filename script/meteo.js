//Le fichier JS pour la partie Météo

//api Meteo

//1
const info = document.createElement("div")
const card = document.querySelector(".cardMeteo")
const bouton = document.querySelector('button')

//2
    info.style.height ="300px"
    info.style.width ="200px"
    info.style.margin ="16px 0 16px 0"
    info.style.border ="3px solid grey"
    info.style.padding ="16 12 24 12"

//3
card.appendChild(info)
card.append(bouton)

//4 
function addInfo(){
    info.innerText = txt
}

//5
function boutton(){
    bouton.setAttribute('class', "button__cardMeteo")
}
    

//6
bouton.addEventListener('mousedown', (e)=>{
    console.log(e)
    bouton.style.backgroundColor = 'orange'
})

//7
document.addEventListener('mouseup',(e)=>{
    console.log(e)
    bouton.style.backgroundColor ='cornFlowerblue'
})

//8


//9
boutton();

