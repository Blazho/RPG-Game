class Enemy{
    constructor(enemyTier) {
        console.log("In Enemy constructor");
        switch (enemyTier) {
            case 1:
                this.class = "Goblin";//Hobo goblin
                this.health = randomIntFromInterval(80, 99);
                this.strength = randomIntFromInterval(80, 99);
                this.agility = randomIntFromInterval(80, 99);
                this.mana = randomIntFromInterval(80, 99);
                break;
            case 2:
                this.class = "Orc";//High ork
                this.health = randomIntFromInterval(100, 120);
                this.strength = randomIntFromInterval(100, 120);
                this.agility = randomIntFromInterval(100, 120);
                this.mana = randomIntFromInterval(100, 120);
                break;
            case 3:
                this.class = "Troll";// Ogre
                this.health = randomIntFromInterval(110, 130);
                this.strength = randomIntFromInterval(110, 130);
                this.agility = randomIntFromInterval(110, 130);
                this.mana = randomIntFromInterval(110, 130);
                break;
        }
    }
    getEnemy(){
        return "<a class='toggle'>\n" +
            "            <h2>" + enemy.class + "</h2>\n" +
            "            <img src=\"img/" + enemy.class + ".jpg\" alt=\"" + enemy.class + "\">\n" +
            "            <div class=\"stats\">\n" +
            "                <p>Health: " + enemy.health + "</p>\n" +
            "                <p>Strength: " + enemy.strength + "</p>\n" +
            "                <p>Agility: " + enemy.agility + "</p>\n" +
            "                <p>Mana: " + enemy.mana + "</p>\n" +
            "            </div>\n" +
            "        </a>";
    }
}