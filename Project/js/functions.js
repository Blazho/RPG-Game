function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function setUpFight(){
    return player.getClassAvatar() + "<div class='spliter'></div>" + enemy.getEnemy();
}