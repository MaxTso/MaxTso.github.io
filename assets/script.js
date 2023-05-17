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

const arrow = document.querySelectorAll('.arrow');
const bannerImg = document.querySelector('.banner-img');
const dots = document.querySelector('.dots');
const searchForP = document.getElementById('banner').children;
let num = 0;

//Fonction permettant le changement de tous le contenu (dot, image et texte) en fonction du numéro donné.

function changecontent(n){
	bannerImg.src=`../assets/images/slideshow/${slides[n]['image']}`;
	dot[num].setAttribute('class', 'dot dot_selected');
	let changeParagraph = document.createElement('p');
	let change = changeParagraph.innerHTML = slides[n]['tagLine'];
	searchForP[1].replaceWith(changeParagraph);
}

// boucle sur la longueur du tableau pour ajouter les dots
for (let i = 0; i < slides.length; i++){
	let dot = document.createElement('div');
	dots.appendChild(dot).setAttribute('class','dot');
}

// Sélection de tous les dots
const dot = document.querySelectorAll('.dot');
changecontent(num);


// Boucle pour ajouter un listener sur toutes les classes "arrow"
for (let i = 0; i < arrow.length; i++){
	arrow[i].addEventListener('click',function(){
		// Vérification de quel arrow à été cliqué
		if (arrow[i].className.match('arrow_right')){
			// Quand l'arrow à été cliqué, on enlève la classe dot_selected 
			// au dot précédent juste en mettant à jour la classe
			dot[num].setAttribute('class', 'dot');
			// Check si on arrive au bout du tableau pour le remettre à zéro.
			if (num == 3){
				num = 0;
				changecontent(num);
				//interruption du code ici pour ne pas rechanger d'image et dot.
				return;
			}
			// Si on est pas arrivé au bout du tableau on incrémente dans la taille du tableau 
			// et ajout des images et dot en question
			num += 1;
			changecontent(num);
		} 
		else {
			dot[num].setAttribute('class', 'dot');
			if(num == 0){
				num = 3;
				changecontent(num);
				return;
			}
			// Ici on décrémente pour revenir en arrière pour les images et les dots.
			num -= 1;
			changecontent(num);
		}
	})
}
