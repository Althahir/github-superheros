// ========================================
// 🎯 INSTRUCTIONS
// ========================================
// 1. Changez l'ID du héros ci-dessous
// 2. Personnalisez l'affichage HTML
// 3. Ajoutez du CSS dans index.html si vous voulez
// 4. Faites des commits réguliers !
// ========================================

const heroId = 620; // 👈 CHANGEZ CET ID !

// Liste des IDs disponibles :
// Spider-Man: 620, Batman: 70, Iron Man: 346, Superman: 644
// Wonder Woman: 720, Hulk: 332, Thor: 659, Flash: 263
const myToken = `6570e44801f81594f8a913d3e21be5ab`;
const apiUrl = `https://superheroapi.com/api.php/${myToken}/${heroId}`;

// Récupérer les données du héros avec fetch()

fetch(apiUrl) 
.then(response => response.json())
.then(data => {
    console.log(data);

    // const heroImageUrl = "https://corsproxy.io/?" + encodeURIComponent(data.image.url);
    // document.getElementById("image").innerHTML = heroImageUrl; 

    //  const image = document.getElementById('image');
    // image.src = data.image.url;

    const heroImageUrl = "https://corsproxy.io/?" + encodeURIComponent(data.image.url);
    document.getElementById("image").innerHTML = `<img src="${heroImageUrl}" alt="image">`;

    const title = document.getElementById('title');
    title.innerHTML = data.name;

    const name = document.getElementById('name');
    name.innerHTML = data.biography['full-name'];

    const editeur = document.getElementById('editeur');
    editeur.innerHTML = data.biography.publisher;

    const intelligence = document.getElementById('intelligence');
    intelligence.innerHTML = data.powerstats.intelligence;

    const force = document.getElementById('force');
    force.innerHTML = data.powerstats.strength;
    

})  

.catch(error => console.error('Erreur :', error));  
// et les afficher grâce à Javascript dans le HTML de cette manière :



// utilisez 

// N'oubliez pas de gérer les erreurs (avec .catch())