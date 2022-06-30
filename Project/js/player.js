class Player{
    constructor(classType) {
        switch (classType) {
            case "Warrior":
                this.class = "Warrior";
                this.health = 1000;
                this.strength = 105;
                this.agility = 100;
                this.mana = 100;
                break;
            case "Mage":
                this.class = "Mage";
                this.health = 1000;
                this.strength = 100;
                this.agility = 100;
                this.mana = 105;
                break;
            case "Hunter":
                this.class = "Hunter";
                this.health = 1000;
                this.strength = 101;
                this.agility = 101;
                this.mana = 101;
                break;
            case "Rogue":
                this.class = "Rogue";
                this.health = 1000;
                this.strength = 100;
                this.agility = 145;
                this.mana = 100;
                break;
        }
    }
    getClassAvatar(){
        return "<a class='toggle'>\n" +
            "            <h2>" + player.class + "</h2>\n" +
            "            <img src=\"img/" + player.class.toLowerCase() + ".jpg\" alt=\"" + player.class + "\">\n" +
            "            <div class=\"stats\">\n" +
            "                <p id='player-health'>Health: " + player.health + "</p>\n" +
            "                <p>Strength: " + player.strength + "</p>\n" +
            "                <p>Agility: " + player.agility + "</p>\n" +
            "                <p>Mana: " + player.mana + "</p>\n" +
            "            </div>\n" +
            "        </a>";
    }
}