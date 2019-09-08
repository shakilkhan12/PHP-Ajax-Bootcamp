function hidMessage(){
const alert = document.querySelector(".alert");
const loader  = document.querySelector(".loader-section");

setTimeout(() => {

    if(alert !== null){
    alert.style.display = "none";
    }

}, 6000);

setTimeout(() => {

    if(loader !== null){
        loader.style.display = "none";
    }

}, 4000);

}

hidMessage();