const ajout=document.getElementById("AddHeroButton")
const message=document.getElementById("message")
const nomhero=document.getElementById("AddHeroName")
const pouvoirhero=document.getElementById("AddHeroPower")
const villehero=document.getElementById("AddHeroCity")
const recharge=document.getElementById("recharge")

const loadHeroes = () => {
  const savedHeroes = localStorage.getItem('heroes');
  if (savedHeroes) {
    displayHeroes(JSON.parse(savedHeroes));
  } else {
    fetch('./heroes.json')
      .then(response => {
        return response.json(); 
      })
      .then(heroes => {
        localStorage.setItem('heroes', JSON.stringify(heroes));
        displayHeroes(heroes);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des héros:", error);
      });
  }
};
const displayHeroes=(heroes)=> {
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
// console.log("id de",hero.name)
container.appendChild(div);
});
}
const deleteHero=(heroId)=>{
    const heroes = localStorage.getItem("heroes");
    const heroesArray=JSON.parse(heroes)
  const heroesFilter = heroesArray.filter(hero => hero.id != heroId)
    
  localStorage.setItem("heroes",JSON.stringify(heroesFilter))
  displayHeroes(heroesFilter)

}
ajout.addEventListener("click",()=>{
if(nomhero.value === "" || pouvoirhero.value === "" || villehero.value === "" ){
      message.classList.remove("MessageOK")
      message.classList.add("MessageKO")
      message.innerHTML="Infos manquantes"
      if(nomhero.value===""){
        nomhero.classList.add("HeroInputError");
      }
      if(pouvoirhero.value===""){
        pouvoirhero.classList.add("HeroInputError");
      }
      if(villehero.value===""){
        villehero.classList.add("HeroInputError");
      }

      setTimeout(() => {
        message.innerHTML=''
        nomhero.classList.remove("HeroInputError")
        pouvoirhero.classList.remove("HeroInputError")
        villehero.classList.remove("HeroInputError")
      }, 2000);
  }
  else{
    const heroesJSON = localStorage.getItem("heroes");
    let NouvelId=0;

    heroes=JSON.parse(heroesJSON)
    for (let a=0;a<heroes.length;a++){
      if(  heroes[a].name.toLowerCase()==nomhero.value.toLowerCase()){
        message.classList.add("MessageKO");
        message.classList.remove("MessageOK");
        message.innerHTML='Existe déjà';
        setTimeout(() => {
          message.innerHTML='';
          message.classList.remove("MessageKO")
          
        }, 2000);
        return
      }
    }
    heroes.forEach(el=>{
      NouvelId=el.id
    })
    NouvelId+=1;
    
    const nouveauHero = {
        id: NouvelId,
        name: nomhero.value,
        power: pouvoirhero.value,
        city: villehero.value
    }
    // console.log(id)
    heroes.push(nouveauHero)
    // console.log(heroes)
    localStorage.removeItem('heroes')
    localStorage.setItem('heroes', JSON.stringify(heroes));
    nomhero.value=''
    pouvoirhero.value=''
    villehero.value=''
    displayHeroes(heroes);
    message.classList.add("MessageOK")
    message.classList.remove("MessageKO")
    message.innerHTML='Héro créé avec succés.'
    setTimeout(() => {
      message.innerHTML=''
    }, 2000);
  }
})
recharge.addEventListener("click",()=>{
  localStorage.removeItem('heroes');
  loadHeroes()

})



loadHeroes()

