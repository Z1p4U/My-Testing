let currentPlace = document.querySelector(".currentPlace")
let allPath = document.querySelectorAll(".map path")

allPath.forEach(function(x){
    x.addEventListener("mouseover",function(){
       
       currentPlace.innerText = x.getAttribute("title")
    })
})