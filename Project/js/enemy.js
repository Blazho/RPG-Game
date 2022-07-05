class Enemy{
    constructor(enemyTier) {
        let total = [120, 200, 300];
        switch (enemyTier) {
            case 1:
                this.class = "Goblin";//Hobo goblin
                total[0] = 120 - randomIntFromInterval(30, 99);
                this.health = randomIntFromInterval(600, 810);
                this.strength = 120 - total[0];
                this.agility = randomIntFromInterval(10, total[0]);
                this.mana = randomIntFromInterval(80, 99);
                this.defence = 0;
                break;
            case 2:
                this.class = "Orc";//High ork
                total[1] = 200 - randomIntFromInterval(100, 120);
                this.health = randomIntFromInterval(1000, 1200);
                this.strength = 200 - total[1]
                this.agility = randomIntFromInterval(80, total[1]);
                this.mana = randomIntFromInterval(90, 110);
                this.defence = 0;
                break;
            case 3:
                this.class = "Troll";// Ogre
                total[2] = 300 - randomIntFromInterval(180, 260);
                this.health = randomIntFromInterval(1300, 1500);
                this.strength = 300 - total[2];
                this.agility = randomIntFromInterval(40, total[2]);
                this.mana = randomIntFromInterval(100, 120);
                this.defence = 0.2;
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