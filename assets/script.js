const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var liste = document.createElement("ul");

for (var i = 0; i < slides.length; i++){

	var elemListe = document.createElement("li");
	elemListe.classList.add("dot");
	liste.appendChild(elemListe);
}
document.querySelector("#banner .dots").append(liste);

var i = 0;
liste.children[i].classList.add("dot_selected");

var fleche_gauche = document.querySelector("#banner .arrow_left");
var fleche_droite = document.querySelector("#banner .arrow_right");

fleche_gauche.addEventListener("click", function(){
	
	console.log(fleche_gauche);

	liste.children[i].classList.remove("dot_selected");
	
	if(i == 0){
		i = 3;
	}
	else{
		i--;
	}
	
	liste.children[i].classList.add("dot_selected");

	var image = document.querySelector("#banner .banner-img");
	image.src = "./assets/images/slideshow/" + slides[i].image;
	var texte = document.querySelector("#banner p");
	texte.innerHTML = slides[i].tagLine;
});

fleche_droite.addEventListener("click", function(){ 
	
	console.log(fleche_droite);
	
	liste.children[i].classList.remove("dot_selected");
	
	if(i == 3){
		i = 0;
	}
	else{
		i++;
	}
	
	liste.children[i].classList.add("dot_selected");

	var image = document.querySelector("#banner .banner-img");
	image.src = "./assets/images/slideshow/" + slides[i].image;
	var texte = document.querySelector("#banner p");
	texte.innerHTML = slides[i].tagLine;
});