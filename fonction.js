function afficcherDeuxValeurs(name) {
    return name
}

const reponseFonction = afficcherDeuxValeurs("Franck")
console.log(reponseFonction)

function test1(param1, param2 = 30 ) {
    if(param1) {
        return param1 + "---" + param2
    } 
    return "You are in the good mood"
}

console.log(test1("",20))

const flechee = (param1, param2) => {
    if(param1) {
        return param1 + "---" + param2
    } 
    return "You are in the good mood"
}
console.log(flechee(20))

const Sum = (x = 0, y = 0, z = 0) => {
    return x + y + z
}
console.log(Sum(1,2))

const confirm = () => {
    return true
}

const ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no()
}

ask(
    "Do you agree ?",
    () => {console.log("You agreed.")},
    () => {console.log("You canceled the execution.")}
)



let userPoints = 0
let computerPoints = 0

for (let i = 1; i < 3; i++) {
    console.log("CHIFFOUMI")

function computerPicker(choice = 3) {
    return Math.floor(Math.random() * choice)
}
computerPicker()

if(computerPicker()==0) console.log("Pierre")
else if(computerPicker()==1) console.log("Feuille")
else if(computerPicker()==2) console.log("Ciseaux")

function UserPicker () {
    let userChoice = prompt("Entrez Pierre, Feuille ou Ciseaux ?")
    return userChoice
}

UserPicker()

function Game() {
    if ((computerPicker() == 0 && UserPicker() == "Ciseaux") || (computerPicker() == 1 && UserPicker() == "Pierre") || (computerPicker() == 2 && UserPicker() == "Feuille")) {
        console.log("Computer wins")
        computerPoints+=1
        alert ("Computer Wins " + computerPoints)
    } else if ((UserPicker() == "Pierre" && computerPicker() == 2) || (UserPicker() == "Feuille" && computerPicker() == 0) || (UserPicker() == "Ciseaux" && computerPicker() == 0)) {
        console.log("User wins")
        userPoints+=1
        alert ("User Wins " + userPoints)
    } else if ((UserPicker() == "Ciseaux" && computerPicker() == 2) || (UserPicker() == "Pierre" && computerPicker() == 0) || (UserPicker() == "Feuille" && computerPicker() == 1)) {
        console.log("Egality")
        alert ("Egality")
    } else {
        alert ("Game finished " + "Computer = " + computerPoints + "User = " + userPoints)
    }
}

    Game()
}




