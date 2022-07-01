let player;
let enemy;
let tier = 1;
let first = true;
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
        document.querySelector("#player-health").innerHTML = "Health: " + player.health.toString();
        alert("You lost health!")
    }
}
function attack(){
    let attack = calcAttack(player)
    let numAttack = calcNumAttack(player);
    enemy.health -= numAttack * attack;
    document.querySelector("#enemy-health").innerHTML = "Health: " + enemy.health.toString();
    alert("You dealt: " + numAttack + "x " + attack);
    if (enemy.health<=0){
        alert("You won!");
        if (first){
            first = false;
        }else {
            first = true;
            tier++;
        }
        document.querySelector(".header h3").innerHTML = "Search for an opponent";
        document.querySelector(".player").innerHTML = player.getClassAvatar();
        document.querySelector(".command button").outerHTML = "<button onclick=\"findOpponent("+ tier +")\">Search for an opponent</button>";
        document.querySelector(".command button").style.visibility = "visible";
    }else {
        player.health -= calcNumAttack(enemy) * calcAttack(enemy);
        document.querySelector("#player-health").innerHTML = "Health: " + player.health.toString();
        alert("You have taken damage!")
        if (player.health <= 0){
            alert("You lost please refresh the page to start again!");
        }
    }
}