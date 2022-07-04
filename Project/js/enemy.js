class Enemy{
    constructor(enemyTier) {
        switch (enemyTier) {
            case 1:
                this.class = "Goblin";//Hobo goblin
                this.health = randomIntFromInterval(800, 990);
                this.strength = randomIntFromInterval(80, 99);
                this.agility = randomIntFromInterval(10, 160);
                this.mana = randomIntFromInterval(80, 99);
                this.defence = 0;
                break;
            case 2:
                this.class = "Orc";//High ork
                this.health = randomIntFromInterval(1000, 1200);
                this.strength = randomIntFromInterval(100, 120);
                this.agility = randomIntFromInterval(100, 120);
                this.mana = randomIntFromInterval(100, 120);
                this.defence = 0;
                break;
            case 3:
                this.class = "Troll";// Ogre
                this.health = randomIntFromInterval(1100, 1300);
                this.strength = randomIntFromInterval(110, 130);
                this.agility = randomIntFromInterval(110, 130);
                this.mana = randomIntFromInterval(110, 130);
                this.defence = 0;
                break;
        }
    }
    getEnemy(){
        return "<a class='toggle'>\n" +
            "            <h2>" + enemy.class + "</h2>\n" +
            "            <img src=\"img/" + enemy.class + ".jpg\" alt=\"" + enemy.class + "\">\n" +
            "            <div class=\"stats\">\n" +
            "                <p id='enemy-health'>Health: " + enemy.health + "</p>\n" +
            "                <p>Strength: " + enemy.strength + "</p>\n" +
            "                <p>Agility: " + enemy.agility + "</p>\n" +
            "                <p>Mana: " + enemy.mana + "</p>\n" +
            "            </div>\n" +
            "        </a>";
    }
}