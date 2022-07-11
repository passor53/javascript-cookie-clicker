
let grades = [50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000];
let count = 0;
let multiplier = 1;
let score = 0;
let autoClick = 6;
let verif_autoclick;

function auto_click() {
  if (score > grades[autoClick])
    { 
      if( !verif_autoclick){
      verif_autoclick= setInterval(augmenterAffichage,1000);}
    }
}


function updateDOMA() {
  let dom_element = document.getElementById('multiplicateur');
  dom_element.innerText = multiplier;
}

function augmenterMultiplicateur() {
  if (score > grades[count]){
  multiplier++; 
  score = score - grades[count];
  updateDOM();
  count++;
  updateDOMA();
  updateDOMB();
  }
  
}

function updateDOM() {
  let dom_element = document.getElementById('affichage');
  dom_element.innerText = score;
}

function updateDOMB() {
  let dom_element = document.getElementById('PRmulti');
  dom_element.innerText = grades[count];
}

function augmenterAffichage() {
    score = score+multiplier;
    updateDOM()
}

document.getElementById('multiplier').addEventListener('click', augmenterMultiplicateur);
document.getElementById('mon_bouton').addEventListener('click', augmenterAffichage);



// gestion audio

const audio = new Audio("sound/gifle.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
