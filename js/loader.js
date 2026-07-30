const messages = [

    "Initializing Portfolio...",

    "Loading Projects...",

    "Preparing Experience...",

    "Optimizing Interface...",

    "Welcome."

];

let index = 0;

const text = document.getElementById("loading-text");

const interval = setInterval(() => {

    index++;

    if(index < messages.length){

        text.style.opacity = "0";

        setTimeout(() => {

            text.textContent = messages[index];

            text.style.opacity = "1";

        },250);

    }

},200);

window.addEventListener("load", () => {

    setTimeout(() => {

        clearInterval(interval);

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.remove();

        },800);

    },1000);

});