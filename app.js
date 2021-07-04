"use strict";

let attempt = document.getElementById = ("attemp");
let contanierEl = document.getElementById = ("contanier");
let rightEL = document.getElementById = ("right");
let middleEL = document.getElementById = ("middle");
let leftEL = document.getElementById = ("left");
let ulEl = document.getElementById = ("outcome");

let mall = [];

function busImg(prouductName) {
  this.pName = prouductName.spilt(".")[0];
  this.img = "imgs/" + prouductName;
  this.viwes = 0;

  mall.push(this);
}

let mallImg = [
  "bag.jpg",
  "banana.jpg",
  "bathroom.jpg",
  "boots.jpg",
  "breakfast.jpg",
  "bubblegum.jpg",
  "chair.jpg",
  "cthulhu.jpg",
  "dog-duk.jpg",
  "dragon.jpg",
  "pen.jpg",
  "et-sweep.jpg",
  "scissors.jpg",
  "shark.jpg",
  "sweep.png",
  "tauntaun.jpf",
  "unicorn.jpg",
  "water-can.jpg",
  "wine-glass.jpg",
];

for (let i = 0; i < mallImg; i++) {
  new  busImg(mallImg[i]);
}

function randomIndex() {
  //to give  rand index in this case  whiches true number

  return Math.floor(Math.random() * mall.length);
}

function renderRandomImg() {
  let rightIndex = randomIndex();
  let midelIndex = randomIndex();
  let leftIndex = randomIndex();

  while(rightIndex === midelIndex ===  leftIndex){

      leftIndex = randomIndex();
      midelIndex = randomIndex();
      rightIndex = randomIndex();
  }

  leftEL.setAttribute("src" , mall[leftIndex].img);

  rightEL.setAttribute("src" , mall[midelIndex].img);

  middleEL.setAttribute("src " , mall[rightIndex].img);
}
renderRandomImg();

leftEL.addEventListener('ckick',Handel)

rightEL.addEventListener('click',Handel)

middleEL.addEventListener('click',Handel)

function Handel(){

}





