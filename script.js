
  // Les variables.
let grades = [];
let count = 0;
let multiplier = 1;
let score = 0;
let autoClick = 13;
let bonus = 5000; 
let verif_autoclick;
let verif_bonus;
let time_bonus = 30;
let val_bonus = 1;
let id;
let Element;
let bloc_bonus = true;
let val = 50;


  // Boucle pour incrémentation du tableau.
for (let index = 0; index < 200; index++) {
  grades.push (val);
  val = val + 25;
}

  // Fonction bonus + retrait du coup de 5000
function Bonus() {
    if (score > bonus && bloc_bonus){
      score = score - 5000;
      bloc_bonus = false;
      updateDOM ('affichage', score);
      val_bonus = 2;
      verif_bonus = setInterval(time_b, 1000);
    }} 

// fonction bloquage du bouton bonus de 200% après 30 secondes.
function time_b() {
  time_bonus--;
  updateDOM('rebourd',time_bonus); 
  if(time_bonus== 0){
    clearInterval(verif_bonus);
    time_bonus = 30;
    val_bonus = 1;
    bloc_bonus = true;
    updateDOM('rebourd',time_bonus); 
  }}

    // Fonction mise a jour click + retrait de 500 points.
function auto_click() {
  if (score > grades[autoClick]) { 
      if ( !verif_autoclick) {
      verif_autoclick= setInterval(augmenterAffichage,500);
      score = score - 500;
      updateDOM ('affichage', score)
    }}}

  // fonction multiplicateur + mise a jour de l'affichage.
function augmenterMultiplicateur() {
  if (score > grades[count]) {
  multiplier++; 
  score = score - grades[count];
  updateDOM('affichage', score);
  count++;
  updateDOM('multiplicateur', multiplier);
  updateDOM('PRmulti',grades[count]);
  }}
  
    // fonction Mise a jour des variables.
function updateDOM(id,Element) {
  let dom_element = document.getElementById(id);
  dom_element.innerText = Element;
}

  // Fonction incrementation de score
function augmenterAffichage() {
    score = score + multiplier * val_bonus;
    updateDOM('affichage', score);
}

  // Surveillence des clicks
document.getElementById('multiplier').addEventListener('click', augmenterMultiplicateur);
document.getElementById('mon_bouton').addEventListener('click', augmenterAffichage);


  // bouton reset
function refreshPage(){
  window.location.reload();
}

// gestion audio
const audio = new Audio("sound/gifle.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
