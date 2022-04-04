let text = "";


for (let i = 0; i <= 20; i++) {
    text += "Le nombre est: " + i + "<br>";

}

document.getElementById("demo").innerHTML = text;

const noms = ["Emmanuel", "Jean", "Claire", "Sarah", "Bruce"]


let tableaunom = "";

for (let i = 0; i <= noms.length - 1; i++) {
    tableaunom += (i + 1) + "." + noms[i] + "<br>";

}
document.getElementById("tab").innerHTML = tableaunom;

//while

let textwhile = "";

let m = 0;

while (m <= 20) {

    textwhile += "Le nombre est: " + m + "<br>";
    m++;

}
document.getElementById("demowhile").innerHTML = textwhile;



//do while

let textdowhile = "";

let n = 0;

do {

    textdowhile += "Le nombre est: " + n + "<br>";
    n++;

}
while (n <= 20)



document.getElementById("demodowhile").innerHTML = textdowhile;