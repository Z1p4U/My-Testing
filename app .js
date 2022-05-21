let currentPlace = document.querySelector(".currentPlace")
let allPath = document.querySelectorAll(".map path")

allPath.forEach(function(x){
    x.addEventListener("mouseover",function(){
       console.log(x.getAttribute("title")) 
       currentPlace.innerText = x.getAttribute("title")
    })
})