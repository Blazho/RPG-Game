let player;
let enemy;
// Set up battleground and class
function selectClass(playerClass){
    player = new Player(playerClass);
    //Change headers
    document.querySelector(".header h2").innerHTML = "Role Playing Game".toUpperCase();
    document.querySelector(".header h3").innerHTML = "Search for an opponent";
    //Set class
    document.querySelector(".player").innerHTML = player.getClassAvatar();
    //Search for opponent button
    document.querySelector(".command button").style.visibility = "visible";
}
function findOpponent(tier){
    enemy = new Enemy(tier)
    //Change header
    document.querySelector(".header h3").innerHTML = "Fight!";
    //Set up battle
    document.querySelector(".player").innerHTML = setUpFight();
    //Buttons
    document.querySelector(".command button").style.visibility = "hidden";
    if (!calcFirst(player.agility, enemy.agility)){
        player.health -= calcNumAttack(enemy) * calcAttack(enemy);
        document.querySelector("#player-health").innerHTML = player.health.toString();
    }
}
function attack(){
    let attack = calcAttack(player)
    let numAttack = calcNumAttack(player);
    enemy.health -= numAttack * attack;
    document.querySelector("#enemy-health").innerHTML = enemy.health.toString();
    alert("You dealt: " + numAttack + "x " + attack);
}