const container = document.querySelector(".container")
// container
const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
let qs = [
	`Are you a refugee, from the Novus Ordo Missae?`,
	`Confused about being catholic?`,
	`Tiered of Mass without reverence?`,
	`Do you feel robbed of the mass of the Saints?`,
	`Looking for what is what is beautiful, Eternal and True?`,
	`tiered of continual renewal? Looking for stability?`,
	`would you ride on a bus if the driver was facing you?`,
	`one liturgical abuse to many?`,
	`want to but Christ back at the center of the Mass.`,
	`do you want the Faith not the Politics.`,
	`Do you have what it takes to be Catholic?`,
	`Tiered of the 70's art style?`,
	`When last did you go to confession?`,
]
// p1.textContent= qs[0]

const meme = document.querySelector(".meme");
const question = document.querySelector("#question");
const q = [
    "it is Protestant",
    "it is okay for two men to have the bum sex",
    "unrepentant gaysexualists can get blessed in a Catholic Church",
    "unrepentant gaysexualists can get sacramentally married in the Church",
    "I still go to hell for eating meat on a Friday",
    "anybody off the street can handle Consecrated Hosts",
    "I can divorce my wife and still go to communion",
    "the Dogmas of the Church are no longer Dogmatic",
    "it is synodal, what is the point of Papal authority",
    "I can wrap my Jimmy in a jacket, and it's not a sin",
]
let x = 0;
question.textContent = q[4]
meme.addEventListener('click', ()=> {
    if (x > q.length) {
        x = 0;
    } else {
        x = x + 1;
    }
    // question.textContent = q[Math.floor(Math.random() * q.length)]
    question.textContent = q[x]
})

// let pics = [
// 	"Knight" = [
// 		"./static/img/untitled folder 1/Knight Bowing.jpeg",
// 		"./static/img/untitled folder 1/Our Lord.jpeg",
// 		"./static/img/untitled folder 1/Templar Knight Fantasy Art.jpeg",
// 		"./static/img/untitled folder 1/Templar Knight.jpeg",
// 	],
// 	"Painting" = [
// 		"./static/img/untitled folder 2/106186503710415303.jpeg",
// 		"./static/img/untitled folder 2/Agnus Dei Wallpaper.jpeg",
// 		"./static/img/untitled folder 2/Christian Illustration.jpeg",
// 		"./static/img/untitled folder 2/End Times Prophecy.jpeg",
// 		"./static/img/untitled folder 2/Lds Artwork Christ.jpeg",
// 		"./static/img/untitled folder 2/Pics Of Jesus.jpeg",
// 		"./static/img/untitled folder 2/Religious Pictures.jpeg",
// 		"./static/img/untitled folder 2/Wallpaper Jesus 4k.jpeg",
// 	],
// 	"Rosary" = [
// 		"./static/img/untitled folder 3/2111131073544852.jpeg",
// 		"./static/img/untitled folder 3/Christian Acronyms Words.jpeg",
// 		"./static/img/untitled folder 3/Gothic Catholicism.jpeg",
// 		"./static/img/untitled folder 3/Rosary Sticker Design.jpeg",
// 	],
// 	"Mass Painting" = [
// 		"./static/img/untitled folder 4/All The Saints.jpeg",
// 		"./static/img/untitled folder 4/Classic Painting Humor.jpeg",
// 		"./static/img/untitled folder 4/Jindřich Tomec 1863-1928, Mass at St. Stephen's Cathedral.webp",
// 		"./static/img/untitled folder 4/Religious Crisis.jpeg",
// 		"./static/img/untitled folder 4/tlm_1.jpg",
// 		"./static/img/untitled folder 4/Victorian Religious Art.jpeg",
// 	],
// 	"Incense" = [
// 		"./static/img/untitled folder 5/Catholic Basilica.jpeg",
// 		"./static/img/untitled folder 5/Catholic Lent Pictures.jpeg",
// 		"./static/img/untitled folder 5/Catholic Wallpaper.jpeg",
// 		"./static/img/untitled folder 5/Catholics Faithful To Tradition.jpg",
// 		"./static/img/untitled folder 5/Censer Catholic.jpeg",
// 		"./static/img/untitled folder 5/Christian Saints.jpeg",
// 		"./static/img/untitled folder 5/Jezus.jpeg",
// 		"./static/img/untitled folder 5/Religious Aesthetic Dark.jpeg",
// 	],
// 	"Mass" = [
// 		"./static/img/untitled folder 6/Beautiful Pictures Of Churches.jpeg",
// 		"./static/img/untitled folder 6/IMG_1093.jpg",
// 		"./static/img/untitled folder 6/img_2794.jpg",
// 		"./static/img/untitled folder 6/Ecce_Agnus_Dei_1.jpg",
// 		"./static/img/untitled folder 6/josh-applegate-ikd_o6lsnns-unsplash.jpg",
// 		"./static/img/untitled folder 6/Liturgical Arts Journal.jpeg",
// 		"./static/img/untitled folder 6/Mass-for-donors-Cn-Stein.jpg",
// 		"./static/img/untitled folder 6/PM4FiYm.jpg",
// 		"./static/img/untitled folder 6/SantaMessa.png",
// 		"./static/img/untitled folder 6/tG6l8fD-2.png",
// 		"./static/img/untitled folder 6/tlm_2.jpg",
// 		"./static/img/untitled folder 6/tlm_3.jpg",
// 		"./static/img/untitled folder 6/tlm_4.jpg",
// 		"./static/img/untitled folder 6/tlm_5.jpg",
// 		"./static/img/untitled folder 6/tlm_6.jpeg",
// 		"./static/img/untitled folder 6/trad-worship.jpg",
// 		"./static/img/untitled folder 6/uScqNpl.jpg",
// 	],
// 	"Adoration" = [
// 		"./static/img/untitled folder 7/Catholic Altar.jpeg",
// 		"./static/img/untitled folder 7/Eucharist.jpeg",
// 		"./static/img/untitled folder 7/Holy God.jpeg",
// 		"./static/img/untitled folder 7/Religious Images Catholic.jpeg",
// 	],
// 	"Levo xiv" = [
// 		"./static/img/untitled folder 8/Catholic Chalice And Ciborium Images.jpeg",
// 		"./static/img/untitled folder 8/Chalice Monstrance.jpeg",
// 		"./static/img/untitled folder 8/LEÃO XIV.jpeg",
// 		"./static/img/untitled folder 8/Leone XIV_1.jpeg",
// 		"./static/img/untitled folder 8/Leone XIV_2.jpeg",
// 		"./static/img/untitled folder 8/Pictures Of Saints.jpeg",
// 		"./static/img/untitled folder 8/Pope Leo XIV.jpeg",
// 	],
// 	"Misc" = [
// 		"./static/img/untitled folder 9/Bishop Sheen.jpeg",
// 		"./static/img/untitled folder 9/Old Priest Outfit.jpeg",
// 		"./static/img/untitled folder 9/Traditional Catholic Priest Prayer Religious.jpeg",
// 	],
// ]