// ========================================
// 🎯 INSTRUCTIONS
// ========================================
// 1. Changez l'ID du héros ci-dessous
// 2. Personnalisez l'affichage HTML
// 3. Ajoutez du CSS dans index.html si vous voulez
// 4. Faites des commits réguliers !
// ========================================

const heroId = 370; // 👈 CHANGEZ CET ID !

// Liste des IDs disponibles :
// Spider-Man: 620, Batman: 70, Iron Man: 346, Superman: 644
// Wonder Woman: 720, Hulk: 332, Thor: 659, Flash: 263
const myToken = `6570e44801f81594f8a913d3e21be5ab`;  // Ajoutez le token donné dans le cours
const apiUrl = `https://superheroapi.com/api.php/${myToken}/${heroId}`;

// Récupérer les données du héros avec fetch()
fetch(apiUrl)
.then(function(response) {
    return response.json();
}) // Convertit la réponse en JSON
.then(data => {
    console.log("data", data);
    
    const heroImageUrl ="https://corsproxy.io/?" + encodeURIComponent(data.image.url);

    const heroHtml = `
    <h2>${data.name}</h2>
    <img src="${heroImageUrl}" alt="${data.name}" height="200" />
    <p><strong>Nom complet :</strong> ${data.biography['full-name']}</p>
    <p><strong>Éditeur :</strong> ${data.biography.publisher}</p>
    <p><strong>Intelligence :</strong> ${data.powerstats.intelligence}/100</p>
    <p><strong>Force :</strong> ${data.powerstats.strength}/100</p>
    <p><strong>Vitesse :</strong> ${data.powerstats.speed}/100</p>
    <p><strong>Durabilité :</strong> ${data.powerstats.durability}/100</p>
    <p><strong>Puissance :</strong> ${data.powerstats.power}/100</p>
    <p><strong>Combat :</strong> ${data.powerstats.combat}/100</p>
    <p><strong>Taille :</strong> ${data.appearance.height.join(' / ')}</p>
    <p><strong>Poids :</strong> ${data.appearance.weight.join(' / ')}</p>
    <p><strong>Groupe :</strong> ${data.connections['group-affiliation']}</p>

    `; 
    document.getElementById("hero-info").innerHTML = heroHtml;
}) 
// Affiche les données dans la console
.catch(error => console.error('Erreur :', error)); // Gestion d'erreur

// et les afficher grâce à Javascript dans le HTML de cette manière :

{{/* <h2>${data.name}</h2>
<img src="${heroImageUrl}" alt="${data.name}" height="200">
<p><strong>Nom complet :</strong> ${data.biography['full-name']}</p>
<p><strong>Éditeur :</strong> ${data.biography.publisher}</p>
<p><strong>Intelligence :</strong> ${data.powerstats.intelligence}/100</p>
<p><strong>Force :</strong> ${data.powerstats.strength}/100</p> */}}

// utilisez heroImageUrl = "https://corsproxy.io/?" + encodeURIComponent(data.image.url);

// N'oubliez pas de gérer les erreurs (avec .catch())


// EXO 1 
const chargerHeros = (heroName) => new Promise((resolve, reject) => {

    setTimeout(() =>{
        console. log ("j'attends 1 secondes"); 
        if (heroName.length > 6) {
            resolve("Le héros est prêt !");
        } else {
            reject("Le héros s'est perdu !");
        }
    },   1000);
});

console. log ("Debut");

chargerHeros ("Joker")
    .then((result) => {console. log(result) ;})
    .catch((error) => {console.error(error);});
console.log ("Fin");



// EXO 2 
fetch(`https://superheroapi.com/api.php/${myToken}/${heroId}`)
.then((response) => {
        return response.json();
    })
.then((data) => {
    console.log(data.biography['full-name']);
    const nameparagraph = document.getElementById("name");
    console.log(nameparagraph);
    nameparagraph.innerText=data.biography['full-name']
})  
.catch((error) => { console.error("Erreur :", error); })


function displayHeroes(heroes) {
    const container = document.getElementById('heroesList');
    container.innerHTML = '';
    heroes.forEach(hero => {
        const div = document.createElement('div');
        div.className = 'hero-card';
        div.innerHTML = `
            <h3>${hero.name}</h3>
            <button onclick="deleteHero(${hero.id})">Supprimer</button>
        `;
        container.appendChild(div);
    });
}


//projet 

async function loadHeroes() {
    const savedHeroes = localStorage.getItem('heroes');
    if (savedHeroes) {
        displayHeroes(JSON.parse(savedHeroes));
    } 
    else {
        const response = await fetch('heroes.json');
        const heroes = await response.json();
        localStorage.setItem('heroes', JSON.stringify(heroes));
        displayHeroes(heroes);
    }
}
localStorage.setItem('heroes', JSON.stringify(heroesArray));

function displayHeroes(heroes) {
const container = document.getElementById('heroesList');
container.innerHTML = '';
heroes.forEach(hero => {
const div = document.createElement('div');
div.className = 'hero-card';
div.innerHTML = `
<h3>${hero.name}</h3>
<p>${hero.power}</p>
<p>${hero.city}</p>
<button onclick="deleteHero(${hero.id})">Supprimer</button>
`;
container.appendChild(div);
});
}


async function loadHeroes() {
        const response = await fetch('heroes.json');
        const heroes = await response.json();
        
        console.log("Héros chargés depuis heroes.json :", heroes);
        

        localStorage.setItem('heroes', JSON.stringify(heroes));
        console.log("Héros sauvegardés dans le localStorage !");
        displayHeroes(heroes);
    }
loadHeroes();


function ajt(){
    const heroName = document.getElementById('name').value;
    
    const savedHeroes = localStorage.getItem('heroes');
    const heroes = JSON.parse(savedHeroes);

    const newHero = {
        id: heroes.length + 1,
        name: heroName,
    };

    data.push(newHero);
    localStorage.setItem('heroes', JSON.stringify(data));

    displayHeroes(data); 
}


function deleteHero(heroId) {
    const savedHeroes = localStorage.getItem('heroes');
    const heroes = JSON.parse(savedHeroes);
    
    const newHeroes = []; 
    
    for (let i = 0; i < heroes.length; i++) {
        const hero = heroes[i]; 
        if (hero.id !== heroId) {
            newHeroes.push(hero); 
        }
    }
    localStorage.setItem('heroes', JSON.stringify(newHeroes));
    displayHeroes(newHeroes);
}