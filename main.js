let userpoint = 0;
let cpupoint = 0;

let instruccions = document.querySelector("#instruccions");
let cont_user_point = document.querySelector("#points-user");
let cont_cpu_point = document.querySelector("#points-cpu");
let message = document.querySelector("#msg");
let choise_weapon = document.querySelector("#choise-weapon")

let cont_win_point = document.querySelector("#win-point");
let cont_choise_user = document.querySelector("#choise-user");
let cont_choise_cpu = document.querySelector("#choise-cpu");

let btn_weapons = document.querySelectorAll(".weapon");

btn_weapons.forEach(button => {
    button.addEventListener("click", start);
});
function start(e){
   let choise_cpu = Math.floor(Math.random() *3);
   let choise_user = e.currentTarget.id;


   if (choise_cpu === 0){
    choise_cpu = "rock🪨";
   }else if (choise_cpu === 1){
    choise_cpu = "paper📝"
   }else{
    choise_cpu = "scissors✂️"
   }
   if ( 
        (choise_user === "rock🪨" &&  choise_cpu === "scissors✂️") || 
        (choise_user === "scissors✂️" && choise_cpu === "paper📝") ||
        (choise_user === "paper📝" && choise_cpu === "rock🪨")

   ) { 

    win_user();

   }else if (
    (choise_cpu === "rock🪨" &&  choise_user === "scissors✂️") || 
    (choise_cpu === "scissors✂️" && choise_user === "paper📝") ||
    (choise_cpu === "paper📝" && choise_user === "rock🪨")

   ) {
    win_pc();
   }else {
    tie();
   }
  message.classList.remove("disabled");
  cont_choise_user.innerHTML =choise_user;
  cont_choise_cpu.innerHTML = choise_cpu;

  if (userpoint === 5 || cpupoint === 5){
    if(userpoint === 5){
        instruccions.innerHTML = "🔥 You Win the Game 🏆"
    }
    if(cpupoint === 5){
        instruccions.innerHTML = "😭 Cpu Win the game , you suck 😭"

    }
    choise_weapon.classList.add("disabled");
    restart.classList.remove("disabled");
    restart.addEventListener("click",restart_game);
  }
}

function win_user(){
    userpoint ++;
    cont_user_point.innerHTML = userpoint;
    cont_win_point.innerHTML = "You Win a 1 point 🔥";


}
function win_pc(){
    cpupoint ++;
    cont_cpu_point.innerHTML = cpupoint;
    cont_win_point.innerHTML = "Cpu win a 1 point 😭";


}
function tie(){
    cont_win_point.innerHTML = "This a Tie 😒"
}
function restart_game(){
    restart.classList.add("disabled");
    choise_weapon.classList.remove("disabled");
    message.classList.add("disabled");

    userpoint = 0;
    cpupoint = 0;

    cont_user_point.innerHTML = userpoint;
    cont_cpu_point.innerHTML = cpupoint;

    instruccions.innerHTML = "The First to reach 5 points wins";

    
}
// rock 0
// paper 1
// scissor 2 
