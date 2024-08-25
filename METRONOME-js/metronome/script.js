import Timer from "./timer.js";
//const
const tempo = document.querySelector(".tempo")
const tempo_text = document.querySelector(".tempo_text")
const decreas_tempo = document.querySelector("#decreas_tempo")
const increas_tempo = document.querySelector("#increas_tempo")
const slider = document.querySelector(".slider")
const start_stop = document.querySelector(".start_step")
const subtract_beats = document.querySelector(".subtract_beats")
const measures_count = document.querySelector(".measures_count")
const add_beats = document.querySelector(".add_beats")
//صداها
const click1 = new Audio('click1.mp3');
const click2 = new Audio('click2.mp3');

//مقدار دهی اولیه
let bpm = 140;
let beatspermeasure = 4;
let count = 0;
let isrunning = false
let tempotextstring = 'medium';

//دستورات


decreas_tempo.addEventListener('click', () => {
    if(bpm <= 20 ){ return }
bpm--;
validatetempo();
updatemetronome();
});
increas_tempo.addEventListener('click', () => {
    if(bpm >= 280 ){ return }
    bpm++;
    validatetempo();
    updatemetronome();
    });
//input
    slider.addEventListener('input', () =>{
bpm = slider.value;
validatetempo();
updatemetronome();
    })
    add_beats.addEventListener('click', () => {
    if(beatspermeasure >= 12){return}
        beatspermeasure++;
        measures_count.textContent = beatspermeasure;
        count = 0;
    })  
    subtract_beats.addEventListener('click', () => {
        if(beatspermeasure <= 2){return}
        beatspermeasure--;
        measures_count.textContent = beatspermeasure;
        count = 0;
    })  

    start_stop.addEventListener('click', () => {
count = 0;
if(!isrunning){
metronome.start();
isrunning = true;
start_stop.textContent = 'stop'
}
else{
metronome.stop();
isrunning = false;
start_stop.textContent = 'start'
}
 });



    //فانکشن
   
function updatemetronome(){
tempo.textContent = bpm;
slider.value = bpm
metronome.timeInterval = 60000 / bpm
// اندازه صدا درجه بندی
if(bpm <= 40){tempotextstring = "lowest speed"}
if(bpm > 40 && bpm < 80){tempotextstring = "slow"}
if(bpm > 80 && bpm < 120){tempotextstring = "getting there"}
if(bpm > 120 && bpm < 180){tempotextstring = "nice and steady"}
if(bpm > 180 && bpm < 220){tempotextstring = "Rock `n Roll"}
if(bpm > 220 && bpm < 240){tempotextstring = "Funky Stuff"}
if(bpm > 240 && bpm < 260){tempotextstring = "Relaxe Dude"}
if(bpm > 260 && bpm < 280){tempotextstring = "highest speed"}

tempo_text.textContent = tempotextstring;
}
function validatetempo() {
    if(bpm <= 20 ){ return }
    if(bpm >= 280 ){ return }
}
function playclick(){
if(count === beatspermeasure){
count = 0;

}
if(count === 0){
click1.play();
}
else{
click2.play();
click2.currentTime = 0;
}
count++;
}
const metronome = new Timer(playclick, 60000 / bpm, {immediate: true});





