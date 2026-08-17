// Select the card element by its ID
const card = document.querySelectorAll("#myCard");
// Add an event listener for a 'click' event
for (let i = 0; i < card.length; i++) {
	card[i].addEventListener('click', () =>  {
		// console.log(`Button${i} clicked`);
		card[i].classList.toggle('is-flipped')
	});
}
// card.addEventListener("click", function() {
// 	// Toggle the 'is-flipped' class
// 	card.classList.toggle("is-flipped");
// });
// Show hide cards
const btns = document.querySelectorAll('button');
const arts = document.querySelectorAll('article');
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', () =>  {
		console.log(`Button${i} clicked`);
		arts[i].classList.toggle('show')
	});
}
// time display
const xxxx = document.querySelector('#time')
xxxx.textContent = 'eferwer'
setInterval(showTime, 1000);
function showTime() {
	const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`]
	const week = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`]
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	let mnth = months[time.getMonth()]
	let day = week[time.getDay()]
	let date = time.getDate()
	let year = time.getFullYear()
	let am_pm = "AM";
	let cer = date
	am_pm = hour >= 12 ? `PM` : `AM`;
	date = date < 10 ?  `0${date}` : date;
	hour = hour < 10 ? `0${hour}` : hour;
	min = min < 10 ? `0${min}` : min;
	sec = sec < 10 ? `0${sec}` : sec;
	date = date < 2 ? `${date}st` : date < 3 ?  `${date}nd` : date < 4 ? `${date}rd` : `${date}th`;
	// let currentTime = `${hour}:${min} ${am_pm} on this ${day} ${cer}, the ${date} day of ${mnth}, in the year of the Lord, ${year}`
	let currentTime = `${hour}:${min}:${sec} ${am_pm} on this ${day}, the ${date} day of ${mnth}, in the year of the Lord, ${year}`
	xxxx.textContent = currentTime;
}
showTime();