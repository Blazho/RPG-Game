let player;
let enemy;
let tier = 1;
let first = true;
let defence = 0;
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
        checkDefeat();
    }
}
function attack(){
    let obj = calcDamage(player, enemy);
    updateHealth(enemy, false);
    alert("You dealt: " + obj.numAttacks + " x " + obj.attack);
    //Check when to update tier for stronger enemy
    console.log("Defence stacks: " + defence);
    if (enemy.health<=0){
        alert("You won!");
        setUpVictory();
    }else {
        if (defence > 0){
            defence --;
        }else {
            player.defence = 0;
        }
        calcDamage(enemy, player);
        updateHealth(player);
        alert("You have taken damage!")
        checkDefeat();
    }
}
// Take reduced damage for two turns
function defend(){
    //Calc defensive power
    player.defence =((player.strength * player.mana*0.1) - (enemy.strength * enemy.mana*0.1))*2 / (player.strength * player.mana*0.1);
    if (player.defence < 0)
        player.defence = 0;
    else if (player.defence > 1){
        player.defence = 0.9;
    }
    //Receive an attack form enemy
    console.log("Player defence: " + player.defence);
    calcDamage(enemy, player);
    updateHealth(player);
    alert("You lost health!")
    defence += 2;
    checkDefeat();
}
function dodge(){
    if (calcDodge()){
        let obj = calcDamage(player, enemy);
        updateHealth(enemy, false);
        alert("Successful evasion!")
        alert("You dealt: " + obj.numAttacks + " x " + obj.attack);
        //If enemy dead victory
        if (enemy.health <= 0)
            setUpVictory();
    }
    else {
        if (defence > 0){
            defence --;
        }else {
            player.defence = 0;
        }
        calcDamage(enemy, player);
        updateHealth(player);
        alert("You have taken damage!")
        checkDefeat();
    }
}