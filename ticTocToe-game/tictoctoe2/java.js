// documents
let unite = document.getElementsByClassName("unite")
let restart = document.getElementById("btn-restart")
let xbtn = document.getElementById("xbtn")
let btn = document.getElementById("btn")
let obtn = document.getElementById("obtn")
let scores_x = document.getElementById("scores_x")
let scores_o = document.getElementById("scores_o")
let draw = document.getElementById("scores_draw")
let b0 = document.getElementById("b0")
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let b6 = document.getElementById("b6")
let b7 = document.getElementById("b7")
let b8 = document.getElementById("b8")
let rel = document.getElementById("rel")
let scores_x_counter = 0;
let scores_o_counter = 0;
let draw_counter = 0;
let buttons =  [
   [unite[0],unite[1],unite[2]],
   [unite[3],unite[4],unite[5]],
   [unite[6],unite[7],unite[8]]
]

let flags = [[null, null, null],
      [null, null, null],
      [null, null, null]]
// انتخاب گزینه ها


xbtn.onclick = function(){
ply = "x"
xbtn.style.display= "none"
obtn.style.display= "none"
h1.style.display = "none"
}

obtn.onclick = function(){
ply = "o"
xbtn.style.display= "none"
obtn.style.display= "none"
h1.style.display = "none"
}
// نمایان کردن ایکس و وای
// وارد کردن x
function show_index(x, y){
   if(flags[x][y] == null){
   if(ply == "x"){
   flags[x][y] = "x";   
   buttons[x][y].innerHTML = "x"
   buttons[x][y].classList.add("x");
   buttons[x][y].style.color = "blue";
   ply = "o";
}
//  وارد کردن o

else if(ply =="o"){
    flags[x][y] = "o";
   buttons[x][y].innerHTML = "o";
   buttons[x][y].classList.add("o");
   buttons[x][y].style.color = "red";


   ply = "x";
}
}

check_game()
}
// چک کردن بازی
function check_game(){
   if(flags[0][0] == "x" && flags[0][1] == "x" && flags[0][2] == "x"){scores_x_counter++;
      scores_x.innerHTML = scores_x_counter;
      scores_x.style.color = "blue" 
      buttons.innerHTML = "";
      

   }

      else if(flags[1][0] == "x" && flags[1][1] == "x" && flags[1][2] == "x"){scores_x_counter++;
         scores_x.innerHTML = scores_x_counter;
         scores_x.style.color = "blue"
          endgame = true ;
          buttons = null ;
         }

         else if(flags[2][0] == "x" && flags[2][1] == "x" && flags[2][2] == "x"){scores_x_counter++;
            scores_x.innerHTML = scores_x_counter;
            scores_x.style.color = "blue"
             endgame = true ;
             buttons = null ;
            }

            else if(flags[0][0] == "x" && flags[1][0] == "x" && flags[2][0] == "x"){scores_x_counter++;
               scores_x.innerHTML = scores_x_counter;
               scores_x.style.color = "blue" 
               endgame = true ;
               buttons = null ;
            }

              else if(flags[0][1] == "x" && flags[1][1] == "x" && flags[2][1] == "x"){scores_x_counter++;
                  scores_x.innerHTML = scores_x_counter;
                  scores_x.style.color = "blue"
                  endgame = true ;
                  buttons = null ;
               } 

                else if(flags[0][2] == "x" && flags[1][2] == "x" && flags[2][2] == "x"){scores_x_counter++;
         scores_x.innerHTML = scores_x_counter;
         scores_x.style.color = "blue" 
         endgame = true ;
         buttons = null ;
      
      }

         else if(flags[2][0] == "x" && flags[1][1] == "x" && flags[0][2] == "x"){scores_x_counter++;
            scores_x.innerHTML = scores_x_counter;
            scores_x.style.color = "blue" 
            endgame = true ;
            buttons = null ;
         }

            else if(flags[0][0] == "x" && flags[1][1] == "x" && flags[2][2] == "x"){scores_x_counter++;
               scores_x.innerHTML = scores_x_counter;
               scores_x.style.color = "blue" 
               buttons = null ;
            }
   

   if(flags[0][0] == "o" && flags[0][1] == "o" && flags[0][2] == "o"){scores_o_counter++;
      scores_o.innerHTML = scores_o_counter;
      scores_o.style.color = "red" }

      else if(flags[1][0] == "o" && flags[1][1] == "o" && flags[1][2] == "o"){scores_o_counter++;
         scores_o.innerHTML = scores_o_counter;
         scores_o.style.color = "red" }

         else if(flags[2][0] == "o" && flags[2][1] == "o" && flags[2][2] == "o"){scores_o_counter++;
            scores_o.innerHTML = scores_o_counter;
            scores_o.style.color = "red" }

            else if(flags[0][0] == "o" && flags[1][0] == "o" && flags[2][0] == "o"){scores_o_counter++;
               scores_o.innerHTML = scores_o_counter;
               scores_o.style.color = "red" }

              else if(flags[0][1] == "o" && flags[1][1] == "o" && flags[2][1] == "o"){scores_o_counter++;
                  scores_o.innerHTML = scores_o_counter;
                  scores_o.style.color = "red" } 

                else if(flags[0][2] == "o" && flags[1][2] == "o" && flags[2][2] == "o"){scores_o_counter++;
         scores_o.innerHTML = scores_o_counter;
         scores_o.style.color = "red" }

         else if(flags[2][0] == "o" && flags[1][1] == "o" && flags[0][2] == "o"){scores_o_counter++;
            scores_o.innerHTML = scores_o_counter;
            scores_o.style.color = "red" }

            else if(flags[0][0] == "o" && flags[1][1] == "o" && flags[2][2] == "o"){scores_o_counter++;
               scores_o.innerHTML = scores_o_counter;
               scores_o.style.color = "red" }

// حالت مساوی
else if ((flags[0][0] == "x" || flags[0][0] =="o" ) && (flags[0][0] == "x" || flags[0][0] == "o")
&& (flags[0][2]=="x" || flags[0][2]=="o") && (flags[1][0]=="x" || flags[1][0]=="o")
&& (flags[1][1]=="x" || flags[1][1]=="o") && (flags[1][2]=="x" || flags[1][2]=="o")
&& (flags[2][0]=="x" || flags[2][0]=="o") && (flags[2][1]=="x" || flags[2][1]=="o")
&& (flags[2][2]=="x" || flags[2][2]=="o")){
draw_counter++;
draw.innerHTML = draw_counter;
Gameend = true;
draw.style.color = "white"
            }

         }
// شروع مجدد
// restart.onclick = function(){
   
//    choice = 1
  
//    gameEnd = true
//    // document.getElementById("rel").innerHTML="match draw";
//    for(let i=0;i<8;i++){
//       for(let j=0;j<8;j++){
//          if(flags[i][j]=="x" || flags[i][j]=="o"){
//             if(ply=="x" || ply=="o"){
//                buttons[i][j].innerHTML=""
//                buttons[i][j].classList.remove("x")
//                buttons[i][j].classList.remove("o")
//                flags[i][j]=null

//               restart.onclick = function(){
//    obtn.style.display = "block";
//    xbtn.style.display = "block";
//    h1.style.display = "block";
//    scores_o.innerHTML = ("0");
//    scores_x.innerHTML = ("0");
//    b1 === null
//    alert("restart with yourself")
//    }
//             }
//          }
//       }
//    }
//      }

restart.onclick = function(){


   choice = 1
  
   gameEnd = true
   for(let i=0;i<8;i++){
      for(let j=0;j<8;j++){
         if(flags[i][j]=="x" || flags[i][j]=="o"){
            if(ply=="x" || ply=="o"){
               buttons[i][j].innerHTML=""
               buttons[i][j].classList.remove("x")
               buttons[i][j].classList.remove("o")
               flags[i][j]=null
   obtn.style.display = "block";
   xbtn.style.display = "block";
   h1.style.display = "block";
   scores_o.innerHTML = ("0");
   scores_x.innerHTML = ("0");
   b1 === null
   

              }}}}}