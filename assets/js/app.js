const modelContainer = document.querySelector(".model-container");
const btn            = document.querySelectorAll(".showModel");

   btn.forEach((element) => {

    element.addEventListener("click", (e) => {
        
        e.preventDefault();
 
        modelContainer.style.display = 'flex';
  
        });

   })


      modelContainer.addEventListener("click", (e) => {
         
         const className = e.target.getAttribute("class");
         if(className === "model-container"){
         	modelContainer.style.display = 'none';
         }

      })

       function imageName(){
        
        let image = document.getElementById("imageInput").value;
        console.log(image);
        let imageName = image.split("\\");
        let index = imageName.length - 1;
        let label = document.getElementById("custom-label");
            label.innerText = imageName[index];

      }

      function get(){
         const warning = document.querySelector(".btn-warning");
               warning.style.display = "none";
      }
