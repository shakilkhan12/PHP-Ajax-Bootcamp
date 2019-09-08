const galleryForm = document.getElementById("galleryForm");
const imageInput  = document.getElementById("imageInput");
let message       = document.querySelector(".message");
// Event listener for inputinput
      imageInput.addEventListener("change", () => {

    
          $.ajax({
              type : 'POST',
              url  : 'ajax/uploadImage.php',
              data : new FormData($(galleryForm)[0]),
              contentType : false,
              cache : false,
              processData : false,
              success : (response) => {
                  const res = JSON.parse(response);
                  if(res.status === "extension"){
                   message.innerHTML = `<div class="alert danger">
                   <div class="alert-icon"><div class="alertIcon">&times;</div></div>
                   <p> <strong>Error!</strong> ${res.msg}</p>
               </div>`;
               hidMessage();
                  } else if(res.status === "success"){
                    message.innerHTML = `<div class="alert success">
                    <div class="alert-icon"><div class="alertIcon">&check;</div></div>
                    <p> <strong>Success!</strong> ${res.msg}</p>
                </div>`;
                hidMessage();
                fetchImages();
                  }
              }
          })
      })

    

function fetchImages(){
   
   let gallery = document.querySelector(".gallery");
    $.ajax({

        type : 'GET',
        url  : 'ajax/fetchImages.php',
        success : (response) => {
            
            const res = JSON.parse(response);
            if(res.status === "noImage"){
              gallery.innerHTML = `<div style="font-size: 1.4rem;border:1px solid silver;padding: 1rem;color: silver;width: 100%;margin-left:1rem;">No Image</div>`;
            } else if(res.status === "success"){
                let store = '';
                res.data.forEach((img) => {
                store += `<div class="col">
                <a href="assets/img/${img.imageName}" data-lightbox="roadtrip"><img src="assets/img/${img.imageName}" alt="" class="gallery-img"></a>
                <span class="delete" onclick="deleteImage(${img.imageId}, '${img.imageName}');">&times;</span>
            </div>`;
                });

                gallery.innerHTML = store;


            }
              
        }

    })

}
fetchImages();

function deleteImage(imageId, imageName){


    $.ajax({

        type : 'POST',
        url  : 'ajax/deleteImage.php',
        data : {imgId: imageId, imgName: imageName},
        success: (response) => {
            const res = JSON.parse(response);
            if(res.status === "success"){
                message.innerHTML = `<div class="alert success">
                <div class="alert-icon"><div class="alertIcon">&check;</div></div>
                <p> <strong>Success!</strong> ${res.msg}</p>
            </div>`;
            hidMessage();
            fetchImages();
            }
        }

    })



}