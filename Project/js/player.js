class Player{
    constructor(classType) {
        switch (classType) {
            case "Warrior":
                this.class = "Warrior";
                this.health = 1200;
                this.strength = 190;
                this.agility = 70;
                this.mana = 300;
                this.defence = 0;
                break;
            case "Mage":
                this.class = "Mage";
                this.health = 500;
                this.strength = 30;
                this.agility = 50;
                this.mana = 1900;
                this.defence = 0.6;
                break;
            case "Hunter":
                this.class = "Hunter";
                this.health = 1000;
                this.strength = 120;
                this.agility = 120;
                this.mana = 600;
                this.defence = 0;
                break;
            case "Rogue":
                this.class = "Rogue";
                this.health = 800;
                this.strength = 80;
                this.agility = 180;
                this.mana = 400;
                this.defence = 0;
                break;
        }
    }
    getClassAvatar(playerHealth = player.health){
        player.health = playerHealth;
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