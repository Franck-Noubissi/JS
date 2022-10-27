let answer = prompt("Où ressentez vous une douleur ?")

if(answer.toLowerCase() == "abdomen") {
    alert("Vous avez l'apendicite")
} else if (answer.toLowerCase() != "abdomen" || answer.toLowerCase() != "gorge" || answer.toLowerCase() != "aucune") {
    alert ("Vous n'avez pas bien repondu à la question.")
} else if (answer.toLowerCase() == "gorge") {
    let answer2 = prompt ("Avez vous de la fièvre ?")
    answer2.toLowerCase() == "oui" ? alert("Vous avez le rhume") : alert("Vous avez un mal de gorge")
}else if (answer.toLowerCase() == "aucune") {
    let answer3 = prompt("Avez vous de la toux ?")
    if (answer3.toLowerCase() == "non") {
        alert("Vous n'avez rien")
    } else if (answer3.toLowerCase() == "oui") {
        let answer4 = prompt("Avez vous de la fièvre ?")
        answer4.toLowerCase() == "oui" ? alert("Vous avez un rhume") : alert("Vous avez un refroidissement")
    }
}