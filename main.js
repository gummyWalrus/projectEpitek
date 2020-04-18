const personaj = require("personnage.js");
const imptournoi = require("tournoi.js");
var gradur;
var gradouble;
class main {
    
    constructor(){}
    gradur = perso("gradur", 100, 30, 10);
    gradouble = perso("gradouble", 200, 60, 20);
    

    combat(gradur, gradouble);

    

}