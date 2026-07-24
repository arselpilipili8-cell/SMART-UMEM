let percent = document.getElementById("percent");

let value = 0;

let timer = setInterval(function(){

    value++;

    percent.innerHTML = value + "%";

    if(value >= 100){

        clearInterval(timer);

    }

},50);


// Passage automatique à la page Login

setTimeout(function(){

    window.location.href="login.html";

},5000);