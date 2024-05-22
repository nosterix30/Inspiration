const places = ["Salavaux Plage", "Elfenau Park", "Mörigenbucht", "Thun-Bern mit dem Gummiboot", "3 Seen Fahrt", "Mont Vully", "Landhausquai"];
const readings = ["Neue Narrative #4 - Pause ist Arbeit", "avega Blog", "Konsum - Carl Tillessen", "Achtsam morden am Rande der Welt - Karsten Dusse", "Life Rebel - Yvonne Eisenring", "Bali – Das Kochbuch", "Reflekt - Newsletter"];
const champagnes = ["Nudo Spumante Rosato", "Vollmondpirat", "Pet NOT HerterWein", "Pét Nat Anne-Claire Schoot", "Mauler Cadet Muscat Blanc alkoholfrei", "Yamilé Sparkling Rosé Muri Drinks (alkoholfrei)", "A Tue Tête Sureau (Sauerbier)", "Apérol Sour"];

document.getElementById('generateButton').addEventListener('click', generateIdea);

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateIdea() {
    const place = getRandomElement(places);
    const reading = getRandomElement(readings);
    const champagne = getRandomElement(champagnes);

    const idea = `Ort: ${place}, Lektüre: ${reading}, Schaumgetränk: ${champagne}`;
    document.getElementById('idea').innerText = idea;
}
