
const personaj = require("personnage.js");

class tournoi {

define_perso () {    
    var gradur = perso("gradur", 100, 30, 10);
    var gradouble = perso("gradouble", 200, 60, 20); //déclaration des personnages
}

combat (fighter, fighter2)
{
    var tour = 20;

    var combattant = fighter;
    var combattant2 = fighter2;
    
    var pv1 = combattant.pdv;
    var pv2 = combattant2.pdv;
    var force1 = combattant.force;
    var force2 = combattant2.force;
    var armor1 = combattant.armor;
    var armor2 = combattant2.armor; //recup des différent stat des combattants

    while (tour>0){

        if (armor1 > 0){
            armor1 = armor1 - force2;
        }
        else {
            pv1 = pv1 - force2;
        }

        if (armor2 > 0){
            armor2 = armor2 - force2;
        }
        else {
            pv2 = pv2 - force1;
        }                               //le combat
        
        console.log(combattant.nom + "inflige" + force1 + "dégats à " + combattant2.nom);
        console.log(combattan2.nom + "inflige" + force2 + "dégats à " + combattant.nom);




    }

}



};
    

}
