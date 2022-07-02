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
    //Check who is faster
    if (!calcFirst(player.agility, enemy.agility)){
        calcDamage(enemy, player);
        updateHealth(player);
        alert("You lost health!")
    }
}
function attack(){
    let obj = calcDamage(player, enemy);
    updateHealth(enemy, false);
    alert("You dealt: " + obj.numAttacks + " x " + obj.attack);
    //Check when to update tier for stronger enemy
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
        calcDamage(enemy, player);
        updateHealth(player);
        alert("You have taken damage!")
        if (player.health <= 0){
            alert("You lost please refresh the page to start again!");
            document.querySelector(".buttons").style.visibility = "hidden";
            document.querySelector(".refresh-button-div").style.visibility = "visible";
        }
    }
}