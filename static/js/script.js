// script to create dummy links
const sr = document.querySelector("#search_result");
const dd = document.querySelectorAll(".dropdown");

const years = [2000, 2018, 2019, 2020, 2021, 2022];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

for (let i = 0; i < days[0]; i++) {
    let a1 = document.createElement("a");
    a1.href = "#";
    a1.classList = "dirs";
    a1.textContent = `Day: ${i+1}`;
    sr.append(a1);
    for (let j = 0; j < 1; j++) {
        let a2 = document.createElement("a");
        a2.href = "#";
        a2.target = "main_frame";
        a2.classList = "file";
        a2.textContent = `Day ${i+1} File: ${j+1}`;
        sr.append(a2);
    }
}
// create month links in drop down menus
// dd.forEach(d => {
//     months.forEach((m, i) => {
//         let li = document.createElement("li");
//         let a3 = document.createElement("a");
//         a3.href = "#";
//         a3.target = "main_frame"
//         a3.textContent = m;
//         li.append(a3);
//         d.append(li);
//     });
// });



// search functiojnality
const sb = document.querySelector('#search_bar');
const a = sr.querySelectorAll('a');
sb.addEventListener("keyup", () => {
    a.forEach((e) => {
        (e.textContent.startsWith(sb.value) ||
            e.textContent.includes(sb.value) ||
            e.textContent.endsWith(sb.value)) ?
            e.style.display = "" : e.style.display = "none";
    });
});

