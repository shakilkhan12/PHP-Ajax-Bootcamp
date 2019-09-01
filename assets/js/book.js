const bookForm          = document.getElementById("bookForm");
const bookName          = document.getElementById("bookName");
const bookAuthor        = document.getElementById("bookAuthor");
const bookPrice         = document.getElementById("bookPrice");
const nameError         = document.querySelector(".nameError");
const autherError       = document.querySelector(".authorError");
const priceError        = document.querySelector(".priceError");
let nameStatus = autherStatus = priceStatus = true;

// Event listener for book 
      bookForm.addEventListener("submit", (e) => {

        e.preventDefault();

        // Book name validations
        if(Empty(bookName, "Book Name", nameError)){
            nameStatus = false;
 
        } else {
            nameStatus = true;
        }


        // Author validations 
        if(Empty(bookAuthor, "Author Name", autherError)){
            autherStatus = false;
            if(NotInt(bookAuthor, "Author Name", autherError)){
                autherStatus = false;
            } else {
                autherStatus = true;
            }
        } else {
            autherStatus = true;
        }


        // Book price validations
        if(Empty(bookPrice, "Price", priceError)){
            priceStatus = false;
            if(Nagitive(bookPrice, 'Price', priceError)){
                priceStatus = false;
            } else {
                priceStatus = true;
            }
            
        } else {
            priceStatus = true;
        }


      })