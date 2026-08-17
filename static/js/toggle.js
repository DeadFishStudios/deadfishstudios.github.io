const btns = document.querySelectorAll('button');
const arts = document.querySelectorAll('article');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () =>  {
        console.log(`Button${i} clicked`);
        arts[i].classList.toggle('show')
        btns[i].classList.toggle('clicked');
    });
}