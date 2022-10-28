// Option fonction anonyme
(async() => {
	const contenu = await fetch("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_stations-velos-libre-service-nantes-metropole-disponibilites&q=&facet=banking&facet=bonus&facet=status&facet=contract_name");
const contenuJson = await contenu.json()
const disponibles = contenuJson.records
console.log(contenuJson.records)

console.log("Stations de vélos disponibles :")
for(let disponible in disponibles) {
    console.log("Nom : " + disponibles[disponible].fields.name + ", Adresse : " + disponibles[disponible].fields.address + ", Places disponibles : " + disponibles[disponible].fields.available_bike_stands + ", Vélos disponibles : " + disponibles[disponible].fields.available_bikes)
}

})()



