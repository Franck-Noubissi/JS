console.log("Vérifie si deux mots sont des anagrammes : ")

function anagramme(param1, param2) {
    if(param1.lenght === param2.lenght && param1.split('').sort().join('') === param2.split('').sort().join('') && param1 && param2) {
        console.log("Ces deux mots sont des anagrammes")
    } else {
        console.log("Ces deux mots ne sont pas des anagrammes")
    }
}

anagramme("face", "cafe")