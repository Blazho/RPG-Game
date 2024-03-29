function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function refreshPage(){
    window.location.reload();
}
function setUpFight(){
    return player.getClassAvatar() +
        "<div>" +
        "<div class='spliter'></div>" +
        "<div class='buttons'>" +
        "<button onclick='attack()'>Attack</button>" +
        "<button onclick='defend()'>Defend</button>" +
        "<button onclick='dodge()'>Dodge</button>" +
        "</div>" +
        "<h3 id='blocks'>0</h3>" +
        "</div>" +
        enemy.getEnemy();
}
function calcFirst(player, enemy){
    //Calculate who attacks first
    console.log(player*1.5 + ":" + enemy)
    return player*1.5 >= enemy;
}
function calcAttack(attacker){
    let attack = Math.floor(attacker.strength + (attacker.agility*0.30) + attacker.mana * 0.40);
    attack += randomIntFromInterval(0, attack*0.05);
    console.log(attacker.class.toString() + ": " + attack);
    return attack;
}
function calcNumAttack(attacker, receiver){
    let num = attacker.agility - receiver.agility;
    num = Math.floor(num / receiver.agility) + 1;
    console.log("Number of attacks by " + attacker.class + ": " + num);
    if (num < 1)
        num = 1;
    return num;
}
//Updates the fighter health
function updateHealth(fighter, player = true){
    let identity;
    if (player)
        identity = "player";
    else
        identity = "enemy";
    document.querySelector("#" + identity + "-health").innerHTML = "Health: " + fighter.health.toString();
}
//Calculates the damage and returns number of attacks + damage per attack
function calcDamage(attacker, receiver){
    let attack = Math.floor((1 - receiver.defence) * calcAttack(attacker));
    let numAttacks = calcNumAttack(attacker, receiver);
    console.log(attack);
    console.log(numAttacks);
    receiver.health -= numAttacks * attack;
    return {
        numAttacks: numAttacks,
        attack: attack
    };
}
function checkDefeat(){
    if (player.health <= 0){
        alert("You lost please refresh the page to start again!");
        document.querySelector(".buttons").style.visibility = "hidden";
        document.querySelector(".refresh-button-div").style.visibility = "visible";
    }
}
function calcDodge(){
    let dodgeChance = Math.floor(((player.agility - enemy.agility) / player.agility)*100);
    if (dodgeChance<= 0)
        dodgeChance = 7;
    let enemyChance = randomIntFromInterval(0,99);
    return dodgeChance > enemyChance;
}
function setUpVictory(){
    if (first){
        first = false;
    }else {
        first = true;
        tier++;
    }
    document.querySelector(".header h3").innerHTML = "Search for an opponent";
    player.defence = 0;
    defence = 0;
    document.querySelector(".player").innerHTML = player.getClassAvatar();
    document.querySelector(".command button").outerHTML = "<button onclick=\"findOpponent("+ tier +")\">Search for an opponent</button>";
    document.querySelector(".command button").style.visibility = "visible";
}
function updateBlock(){
    document.getElementById("blocks").innerHTML = defence;
}