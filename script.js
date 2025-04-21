const inputbx= document.getElementById("input-box")
const listConatiner = document.getElementById("list-container")

function addtask(){
    if (inputbx.value===''){
        alert("You must add your task!!!")
    }else{
        let li=document.createElement("li")
        li.innerHTML= inputbx.value
        listConatiner.appendChild(li)
        let span =document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputbx.value=""
    storeData()
}

listConatiner.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        storeData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        storeData()
    }
}, false)
function storeData(){
    localStorage.setItem("data",listConatiner.innerHTML)
}
function showadata(){
    listConatiner.innerHTML = localStorage.getItem("data")
}
showadata()