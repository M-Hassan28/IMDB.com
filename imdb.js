let btn = document.getElementById('btn2');
let popup = document.getElementById('popupbox');
  btn.addEventListener('click', () => {
    if (popup.style.display === "block") {
       popup.style.display = "none";
       } else {
       popup.style.display = "block";
       }
    });

let slider = document.getElementById('slider');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
const images = ["images/venom.jpeg", "images/batman.jpeg", "images/captain.jpeg", "images/iron.jpeg", "images/hulk.jpeg", "images/moon.jpeg"];
let i = 0;
prev.addEventListener("click", () => {
  i++;
  if(i >= images.length){
    i = 0;
  }
  slider.src = images[i]
})
next.addEventListener("click", () => {
  i--;
  if(i < 0){
    i = images.length -1;
  }
  slider.src = images[i]
})

let index = 0;
let boxes = document.querySelectorAll(".box")
function showdiv() {
  for(let i = 0; i < boxes.length; i++){
    boxes[i].style.display = "none";
  }
  boxes[index].style.display = "block";
  boxes[index + 1].style.display = "block";
}
showdiv()
document.getElementById('prev2').onclick = function () {
  if(index > 0){
    index -=2;
    showdiv()
  }
}
document.getElementById('next2').onclick = function () {
  if(index < boxes.length - 2){
    index +=2;
    showdiv()
  }
}

let index2 = 0;
let profiles = document.querySelectorAll(".pro");
let show = 5;
function showpro() {
  for(let i = 0; i < profiles.length; i++){
    profiles[i].style.display = "none";
  }
  for(let i = index2; i < index2 + show && i < profiles.length; i++){
    profiles[i].style.display = "block";
  }
}
showpro()
document.getElementById('prev3').onclick = function () {
  if(index2 > 0){
    index2 -= show;
    showpro()
  }
}
document.getElementById('next3').onclick = function () {
  if(index2 < profiles.length - show){
    index2 += show;
    showpro()
  }
}

let index3 = 0;
let trailer = document.querySelectorAll(".tra");
let show2 = 5;
function showtra() {
  for(let i = 0; i < trailer.length; i++){
    trailer[i].style.display = "none";
  }
  for(let i = index3; i < index3 + show2 && i < trailer.length; i++){
    trailer[i].style.display = "block";
  }
}
showtra()
document.getElementById('prev4').onclick = function () {
  if(index3 > 0){
    index3 -= show2;
    showtra()
  }
}
document.getElementById('next4').onclick = function () {
  if(index3 < trailer.length - show2){
    index3 += show2;
    showtra()
  }
}

let index4 = 0;
let interest = document.querySelectorAll(".int");
let show3 = 4;
function showint() {
  for(let i = 0; i < interest.length; i++){
    interest[i].style.display = "none";
  }
  for(let i = index4; i < index4 + show3 && i < interest.length; i++){
    interest[i].style.display = "block";
  }
}
showint()
document.getElementById('prev5').onclick = function () {
  if(index4 > 0){
    index4 -= show3;
    showint()
  }
}
document.getElementById('next5').onclick = function () {
  if(index4 < interest.length - show3){
    index4 += show3;
    showint()
  }
}

let index5 = 0;
let trailer2 = document.querySelectorAll(".tra2")
let show4 = 5;
function showpri() {
  for(let i = 0; i < trailer2.length; i++){
    trailer2[i].style.display = "none";
  }
  for(let i = index5; i < index5 + show4 && i < trailer2.length; i++){
    trailer2[i].style.display = "block";
  }
}
showpri()
document.getElementById('prev6').onclick = function () {
  if(index5 > 0){
    index5 -= show4;
    showpri()
  }
}
document.getElementById('next6').onclick = function () {
  if(index5 < trailer2.length - 2){
    index5 += show4;
    showpri()
  }
}