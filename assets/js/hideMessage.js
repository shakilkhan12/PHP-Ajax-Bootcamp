const success = document.querySelector(".success");
const loader  = document.querySelector(".loader-section");

setTimeout(() => {

    if(success !== null){
    success.style.display = "none";
    }

}, 6000);

setTimeout(() => {

    if(loader !== null){
        loader.style.display = "none";
    }

}, 4000);