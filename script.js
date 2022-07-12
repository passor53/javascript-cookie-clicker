
let grades = [50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1025,1050,1075,1100,1125,1150,1175,1200,1225,1250,1275,1300,1325,1350,1375,1400,1425,1450,1475,1500,1525,1550,1575,1600,1625,1650,1675,1700,1725,1750,1775,1800,1825,1850,1875,1900,1925,1950,1975,2000,2025,2050,2075,2100,2125,2150,2175,2200,2225,2250,2275,2300,2325,2350,2375,2400,2500,2525,2550,2575,2600,2625,2650,2675,2700,2725,2750,2775,2800,2825,2850,2875,2900,2925,2950,2975,3000,3025,3050,3075,3100,3125,3150,3175,3400,3425,3450,3475,3500,3525,3550,3575,3600,3625,3650,3675,3700,3725,3750,3775,3800,3825,3850,3875,3900,3925,3950,3975,4000,4025,4050,4075,4100,4125,4150,4175,4200,4225,4250,4275,4300,4325,4350,4375,4400,4425,4450,4475,4500,4525,4550,4575,4600,4625,4650,4675,4700,4725,4750,4775,4800,4825,4850,4875,4900,4925,4950,4975,5000];
let count = 0;
let multiplier = 1;
let score = 0;
let autoClick = 13;
let bonus = 5000; 
let verif_autoclick;
let verif_bonus;
let time_bonus =30;
let val_bonus = 1;
let id;
let Element;
let bloc_bonus = 0;

  // Fonction bonus + retrait du coup de 5000
function Bonus() {
  
    if (score > bonus && bloc_bonus==0){
      score = score - 5000;
      bloc_bonus = 1;
      updateDOM('affichage', score);
      val_bonus = 2;
      verif_bonus =  setInterval(time_b, 1000);
    }
} 

// fonction bloquage du bouton bonus de 200% après 30 secondes.
function time_b(){
  time_bonus--;
  updateDOM('rebourd',time_bonus); 
  if(time_bonus== 0){
    clearInterval(verif_bonus);
    time_bonus = 30;
    val_bonus = 1;
    bloc_bonus = 0;
    updateDOM('rebourd',time_bonus); 
  }
}

    // Fonction mise a jour click + retrait de 500 points.
function auto_click() {
  if (score > grades[autoClick]) { 
      if( !verif_autoclick){
      verif_autoclick= setInterval(augmenterAffichage,500);
      score = score - 500;
      updateDOM('affichage', score)
    }
    }
}

  // fonction multiplicateur + mise a jour de l'affichage.
function augmenterMultiplicateur() {
  if (score > grades[count]){
  multiplier++; 
  score = score - grades[count];
  updateDOM('affichage', score);
  count++;
  updateDOM('multiplicateur', multiplier);
  updateDOM('PRmulti',grades[count]);
  }
}
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

// gestion audio

const audio = new Audio("sound/gifle.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
