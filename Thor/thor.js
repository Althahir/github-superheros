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
const reponse=document.getElementById("reponse")

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

      const full_name = document.getElementById("full_name")
      full_name.innerHTML = data.biography['full-name']
      
      const editeur=document.getElementById("editeur")
      editeur.innerHTML=data.biography.publisher

      const intelligence=document.getElementById("intelligence")
      intelligence.innerHTML=data.powerstats.intelligence

      const force=document.getElementById("force")
      force.innerHTML=data.powerstats.strength

    ;})

.catch(error => console.error('Erreur :', error)); // Gestion d'erreur

const dateActuelle =new Date();
const seconde = dateActuelle.getSeconds();
 setTimeout(()=>{
  const chargerHeros = new Promise((resolve,reject)=>{
    const success = (seconde % 2==0)
    if (success) resolve(" La seconde est " + seconde +" soit pair. ✅ Le héros est prêt !");
    else reject (" La seconde est " + seconde +" soit impair.❌ Le héros s’est perdu...") 
    });
    chargerHeros
      .then((message) => reponse.innerHTML ="Résultat :" + message) //console.log("Résultat :", message))
      .catch((erreur) => reponse.innerHTML ="Probleme :" + erreur)//console.error("Problème :", erreur))
      .finally(() => console.log("Fin de la promesse"));
 },2000) 

    
