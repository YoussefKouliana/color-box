const input = document.querySelector(".color-input");
const colorBox = document.querySelector(".color-box")

input.addEventListener("change",function(){
    colorBox.style.backgroundColor= input.value
})

