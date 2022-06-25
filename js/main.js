//Create a button that adds 1 to a botScore stored in localStorage 

if (!localStorage.getItem('botScore', 0)) {
    localStorage.setItem('botScore', 0)
}
// 
document.querySelector("h2").innerText= `Value: ${localStorage.getItem('botScore')}`



document.getElementById("click").addEventListener("click",addValue)
document.getElementById("reset").addEventListener("click",removeValue)


function addValue() {
    let localInitVal =Number(localStorage.getItem("botScore"))
    localInitVal += 1
    localStorage.setItem("botScore",localInitVal)
    document.querySelector("h2").innerText= `Value: ${localInitVal}`
    
}

function removeValue() {
    localStorage.clear()
    let localInitVal =Number(localStorage.getItem("botScore"))

    document.querySelector("h2").innerText= `Value: ${localInitVal}`

    
}