function updateDate(){

let date = new Date();

document.getElementById("date").innerHTML =
date.toLocaleString("fr-FR");

}


setInterval(updateDate,1000);

updateDate();