const modelContainer = document.querySelector(".model-container");
const btn            = document.querySelector("#showModel");
      btn.addEventListener("click", () => {

      modelContainer.style.display = 'flex';

      });

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