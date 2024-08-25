// initlizing...
const display = document.querySelector(".screen")
const buttons = document.querySelectorAll("button")
const sch = ["%","*","/", "-", "+", "="]
let output = "";

const calclulate = (btnvalue) => {
if(btnvalue === "=" && btnvalue !== "" ){

    output = eval(output.replace("%" , "/100"))
}
else if(btnvalue === "AC"){
output = ""
}
else if(btnvalue === "DEL"){
output = output.toString().slice(0, -1)
}
else{
if(output === "" &&  sch.includes(btnvalue)) return
output += btnvalue;

}
display.value = output;
}
//functions 
buttons.forEach((button) => {

    button.addEventListener("click" , (e) => calclulate(e.target.dataset.value));
})