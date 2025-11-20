// ========================================
// 🎯 INSTRUCTIONS
// ========================================
// 1. Changez l'ID du héros ci-dessous
// 2. Personnalisez l'affichage HTML
// 3. Ajoutez du CSS dans index.html si vous voulez
// 4. Faites des commits réguliers !
// ========================================
;
const heroId = 659; // 👈 CHANGEZ CET ID !

// Liste des IDs disponibles :
// Spider-Man: 620, Batman: 70, Iron Man: 346, Superman: 644
// Wonder Woman: 720, Hulk: 332, Thor: 659, Flash: 263
const myToken = `6570e44801f81594f8a913d3e21be5ab`;
const apiUrl = `https://superheroapi.com/api.php/${myToken}/${heroId}`;

fetch(apiUrl)
.then(response => response.json())
  .then(data => {
    console.log(data)
 
      const titre = document.getElementById("titre")
      titre.innerHTML = data.name

      const heroImageUrl = "https://corsproxy.io/?" + encodeURIComponent(data.image.url);
      document.getElementById("image").innerHTML= `<img src="${heroImageUrl}" alt="Thor">`;
      document.getElementById("image1").innerHTML= `<img src="${heroImageUrl}" alt="Thor">`;

      const full_name = document.getElementById("full_name")
      full_name.innerHTML = data.biography['full-name']
      
      const editeur=document.getElementById("editeur")
      editeur.innerHTML=data.biography.publisher

      const intelligence=document.getElementById("intelligence")
      intelligence.innerHTML=data.powerstats.intelligence

      const force=document.getElementById("force")
      force.innerHTML=data.powerstats.strength

    ;

    // Injection dans le DOM
    // document.getElementById("image").innerHTML = heroHtml;
  })
 // Affiche les données dans la console
.catch(error => console.error('Erreur :', error)); // Gestion d'erreur

// Récupérer les données du héros avec fetch()
// et les afficher grâce à Javascript dans le HTML de cette manière :

{{/* <h2>${data.name}</h2>
<img src="${heroImageUrl}" alt="${data.name}" height="200">
<p><strong>Nom complet :</strong> ${data.biography['full-name']}</p>
<p><strong>Éditeur :</strong> ${data.biography.publisher}</p>
<p><strong>Intelligence :</strong> ${data.powerstats.intelligence}/100</p>
<p><strong>Force :</strong> ${data.powerstats.strength}/100</p> */}}

// utilisez heroImageUrl = "https://corsproxy.io/?" + encodeURIComponent(data.image.url);

// N'oubliez pas de gérer les erreurs (avec .catch())