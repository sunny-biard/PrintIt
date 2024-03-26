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

const liste = document.createElement("ul");

for (var i = 0; i < slides.length; i++){

	var elemListe = document.createElement("li");
	elemListe.classList.add("dot");
	elemListe.id = i;
	liste.appendChild(elemListe);
}
document.querySelector("#banner .dots").append(liste);

liste.children[0].classList.add("dot_selected");

const fleche_gauche = document.querySelector("#banner .arrow_left");
const fleche_droite = document.querySelector("#banner .arrow_right");

fleche_gauche.addEventListener("click", function(){

	var slideSelected = document.querySelector(".dot_selected");
	slideSelected.classList.remove("dot_selected");
	
	var i = 0;
	if(slideSelected.id == 0){
		
		i = slides.length - 1;
	}
	else{
		
		i = slideSelected.id;
		i--;
	}
	
	liste.children[i].classList.add("dot_selected");

	var image = document.querySelector("#banner .banner-img");
	var texte = document.querySelector("#banner p");

	image.src = "./assets/images/slideshow/" + slides[i].image;
	texte.innerHTML = slides[i].tagLine;
});

fleche_droite.addEventListener("click", function(){ 
	
	var slideSelected = document.querySelector(".dot_selected");
	slideSelected.classList.remove("dot_selected");
	
	var i = 0;
	if(slideSelected.id == 3){
		
		i = 0;
	}
	else{
		
		i = slideSelected.id;
		i++;
	}
	
	liste.children[i].classList.add("dot_selected");

	var image = document.querySelector("#banner .banner-img");
	var texte = document.querySelector("#banner p");

	image.src = "./assets/images/slideshow/" + slides[i].image;
	texte.innerHTML = slides[i].tagLine;
});