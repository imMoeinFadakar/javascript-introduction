// متغیر ها
const marriedbtn = document.querySelector(".married")
const wifediv = document.querySelector("#wife")
const childrendiv = document.querySelector(".children")
const form = document.getElementById("form")
const signup = document.querySelector(".signup")
const childrenbtn = document.querySelector("#checkbox")
const singlebtn = document.querySelector(".single")    
const body = document.querySelector("#body")    
const nightbtn = document.querySelector("#daynight")
const text1 = document.querySelector("#text1")
const text2 = document.querySelector("#text2")
const explain = document.querySelector(".explain")
const password = document.querySelector("#text3")
const singletext = document.querySelector("#single")
const marriedtext = document.querySelector("#married")
const wifetext = document.querySelector("#wife")
const childrentext = document.querySelector("#childern")
const addbtn = document.querySelector("#plus")

//فانکشن ها
signup.onclick = function(){
    form.style.display = "block"
}
marriedbtn.onclick = function(){
    wifediv.style.display = "block"
}
childrenbtn.onclick = function(){
    childrendiv.style.display = "block"
}
addbtn.onclick = function(){
    let input = document.createElement("INPUT");
input.type = 'text';
input.style.display = "block"
input.style.margin = "3%"
input.style.display = "block"



    childrendiv.appendChild(input);
     input.style.width = "87%";
     input.style.height = "5vh";
     input.style.margin = "3vh";
     input.style.fontWeight = "bolder";
     input.style.fontFamily = "'Lilita One', cursive";
}
let manfibtn = document.querySelector("#manfi")

manfibtn.onclick = function(){
childrendiv.removeChild(childrendiv.childNodes[4]);


}



singlebtn.onclick = function(){
    wifediv.style.display = "none"
}
nightbtn.onclick = function(){
   if(nightbtn.textContent = "night"){
    body.style.backgroundColor = "darkblue";
    form.style.backgroundColor = "black";
    text1.style.color = "white";
    text2.style.color = "white";
    explain.style.color = "white";
    password.style.color = "white"
    singletext.style.color = "white";
    marriedtext.style.color = "white";
    wifetext.style.color = "white";
    childrentext.style.color = "white";
nightbtn.textContent = "day"}
if(nightbtn.textContent = "day"){
    nightbtn.onclick = function(){
        body.style.backgroundColor = "lightblue";
        form.style.backgroundColor = "white";
        text1.style.color = "black";
        text2.style.color = "black";
        explain.style.color = "black";
        password.style.color = "black"
        singletext.style.color = "black";
        marriedtext.style.color = "black";
        wifetext.style.color = "black";
        childrentext.style.color = "black";
    nightbtn.textContent = "night"}}}



