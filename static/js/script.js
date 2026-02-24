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
question.textContent = q[x]
meme.addEventListener('click', ()=> {
    if (x > q.length) {
        x = 0;
    } else {
        x = x + 1;
    }
    // question.textContent = q[Math.floor(Math.random() * q.length)]
    question.textContent = q[x]
})