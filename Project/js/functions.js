function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function setUpFight(){
    return player.getClassAvatar() +
        "<div>" +
        "<div class='spliter'></div>" + "<div class='buttons'>" +
        "<button onclick='attack()'>Attack</button>" +
        "<button>Defend</button>" +
        "<button>Dodge</button>" +
        "</div>" +
        "</div>" +
        enemy.getEnemy();
}
function calcFirst(player, enemy){
    //Calculate who attacks first
    return player >= enemy;
}
function calcAttack(attacker){
    let attack = Math.floor(attacker.strength + (attacker.agility*0.30) + attacker.mana * 0.20);
    attack += randomIntFromInterval(0, attack*0.05);
    console.log(attack);
    return attack;
}
function calcNumAttack(attacker){
    let num = Math.floor(attacker.agility/70);
    console.log(attacker.class + ": x" + num);
    return num;
}