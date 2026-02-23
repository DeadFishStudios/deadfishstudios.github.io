const meme = document.querySelector(".meme");
const question = document.querySelector("#question");
const q = [
    "it is okay for two men to have the bum sex?",
    "unrepentant gaysexualist can get blessed in a catholic church?",
    "unrepentant gaysexualist can get sacramentally married?",
    "I still go to hell for eating meat on a friday?",
    "anybody off the street can handle consecrated hosts?",
    "it is now Protestant?",
    "I can divorce my wife and still go to communion?",
    "the Dogmas of the Church are no longer Dogmatic?",
    "if it is now synodal, then why do I still have to listen to you?"
]
question.textContent = q[0]
meme.addEventListener('click', ()=> {
    question.textContent = q[Math.floor(Math.random() * q.length)]
})