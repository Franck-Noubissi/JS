let annuaireExemple = [
    {
        Nom : "Franck",
        Telephone : "0666537549",
    },
    {
        Nom : "Victor",
        Telephone : "0505426566",
    },
    {
        Nom : "Lionel",
        Telephone : "5415215155",
    },
    {
        Nom : "Bassirou",
        Telephone : "6260652052",
    },
    {
        Nom : "Plud1",
        Telephone : "6251515415",
    },
    {
        Nom : "Franck",
        Telephone : "0666537549",
    }
]

function annuaire(param1) {
    for (let i = 0; i < annuaireExemple.length; i++) {
        if (annuaireExemple[i].Nom.includes(param1)) {
            alert ("Nom : " + annuaireExemple[i].Nom + " Telephone : " + annuaireExemple[i].Telephone)
        }
        if (annuaireExemple[i].Telephone.includes(param1)) {
            alert ("Nom : " + annuaireExemple[i].Nom + " Telephone : " + annuaireExemple[i].Telephone)
        }
    }
}

console?log("Je suis le meilleur")

let mot = prompt ("Rechercher un contact avec le nom")
annuaire(mot)