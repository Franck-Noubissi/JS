let annuaireExemple = [
    {
        Nom : "franck",
        Telephone : "0666537549",
    },
    {
        Nom : "victor",
        Telephone : "0505426566",
    },
    {
        Nom : "lionel",
        Telephone : "5415215155",
    },
    {
        Nom : "bassirou",
        Telephone : "6260652052",
    },
    {
        Nom : "plusd1",
        Telephone : "6251515415",
    },
    {
        Nom : "franck",
        Telephone : "0666537549",
    }
]

function annuaire(param1) {
    for (let i = 0; i < annuaireExemple.length; i++) {
        if (annuaireExemple[i].Nom.includes(param1)) {
            alert ("Nom : " + annuaireExemple[i].Nom + " Telephone : " + annuaireExemple[i].Telephone)
        } else if (annuaireExemple[i].Telephone.includes(param1)) {
            alert ("Nom : " + annuaireExemple[i].Nom + " Telephone : " + annuaireExemple[i].Telephone)
        } 
    }
}

console.log("Je suis le meilleur")

let mot = prompt ("Rechercher un contact avec le nom").toLowerCase()
annuaire(mot)