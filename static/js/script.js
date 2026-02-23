const meme = document.querySelector(".meme");
const question = document.querySelector("#question");
const q = [
    "it is okay for two men to have the bum sex",
    "unrepentant gaysexualist can get blessed in a Catholic Church",
    "unrepentant gaysexualist can get sacramentally married in the Church",
    "I still go to hell for eating meat on a Friday",
    "anybody off the street can handle consecrated hosts",
    "it is Protestant",
    "I can divorce my wife and still go to communion",
    "the Dogmas of the Church are no longer Dogmatic",
    // "if it is synodal, the why do I still have to listen to you",
    "I can wrap my Jimmy in a jacket, and it's not a sin",
]
question.textContent = "----"
meme.addEventListener('click', ()=> {
    question.textContent = q[Math.floor(Math.random() * q.length)]
})