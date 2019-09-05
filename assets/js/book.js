const bookForm          = document.getElementById("bookForm");
const bookName          = document.getElementById("bookName");
const bookAuthor        = document.getElementById("bookAuthor");
const bookPrice         = document.getElementById("bookPrice");
const nameError         = document.querySelector(".nameError");
const autherError       = document.querySelector(".authorError");
const priceError        = document.querySelector(".priceError");
const bookStatus        = document.getElementById("bookStatus");
const message           = document.querySelector(".message");
let heading             = document.querySelector(".heading");
let bookButton          = document.getElementById("bookButton");
const modelContainer    = document.querySelector(".model-container");
const bookId            = document.getElementById("bookId");
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
            if(Positive(bookPrice, 'Price', priceError)){
                priceStatus = false;
            } else {
                priceStatus = true;
            }
            
        } else {
            priceStatus = true;
        }

        
        if(nameStatus === false && autherStatus === false && priceStatus === false ){
            console.log('submitted');

            // Send ajax request for add book
            if(bookStatus.value === "addBook"){
                $.ajax({

                    type : 'POST',
                    url  : 'ajax/addBook.php',
                    data : $(bookForm).serialize(),
                    success : (response) => {
                        
                        const convertedRes = JSON.parse(response);
                        if(convertedRes.status === "success"){
                            modelContainer.style.display = "none";
                            bookForm.reset();
                            message.innerHTML = `<div class="alert success">
                            <div class="alert-icon"><div class="alertIcon">&check;</div></div>
                            <p> <strong>Success!</strong> ${convertedRes.msg} </p>
                        </div>`;
                        hidMessage();
                        fetchBooks();
                        }

                    }

                })
            } else if(bookStatus.value === "updateBook"){

                $.ajax({
                    type : 'POST',
                    url  : 'ajax/updateBook.php',
                    data : $(bookForm).serialize(),
                    success : (response) => {
                        const convertedRes = JSON.parse(response);
                        if(convertedRes.status === "success"){
                            modelContainer.style.display = "none";
                            bookForm.reset();
                            message.innerHTML = `<div class="alert success">
                            <div class="alert-icon"><div class="alertIcon">&check;</div></div>
                            <p> <strong>Success!</strong> ${convertedRes.msg} </p>
                        </div>`;
                        hidMessage();
                        fetchBooks();
                            
                        }
                    }
                })

            }
        }


      })



function fetchBooks(){
    
    let table = document.getElementById("table");

    $.ajax({

        type : 'GET',
        url  : 'ajax/fetchBooks.php',
        success : (response) => {
            const res = JSON.parse(response);
            if(res.status === "success"){
             
               let result = "";
                res.data.forEach((book) => {

                result += `<tr>
				<td>${book.bookName}</td>
				<td>${book.authorName}</td>
				<td><div class="dollor">$ ${book.price}.00</div></td>
			    <td><a href="" class="btn btn-warning btn-small updateBookBtn" onclick="updateBook(${book.id}, '${book.bookName}', '${book.authorName}', ${book.price});">Edit <span>&#9998;</span></a></td>
			    <td><a href="javascript:void(0);" class="btn btn-danger btn-small" onclick="deleteBook(${book.id});">Delete <span>&#10006;</span></a></td>
			</tr>`;

                })
                table.innerHTML = `<table class="table">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Book Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>${result}</tbody></table>`;

            } else if(res.status === "noRecords"){
                 table.innerHTML = `<div style="font-size:1.4rem;border: 1px solid #000;padding: 1rem;border-radius: 3px;">No Records</div>`;
            }

            const updateBookBtn = document.querySelectorAll(".updateBookBtn");
                  updateBookBtn.forEach((btn) => {
                   
                    btn.addEventListener("click", (e) => {

                        e.preventDefault();
                        modelBox();

                    })

                  })
        }

    })


}

fetchBooks();

function updateBook(id, bookN, bookA, bookP){

 bookName.value = bookN;
 bookAuthor.value = bookA;
 bookPrice.value = bookP;
 heading.innerHTML = "Update Book";
 bookButton.value = "update book \u276F";
 bookName.classList.remove("borderRed");
 bookAuthor.classList.remove("borderRed");
 bookPrice.classList.remove("borderRed");
 nameError.innerHTML = "";
 autherError.innerHTML = "";
 priceError.innerHTML = "";
 bookStatus.value = "updateBook";
 bookId.value     = id;


}


function addBookForm(){

    bookName.value = "";
    bookAuthor.value = "";
    bookPrice.value = "";
    heading.innerHTML = "Add Book";
    bookButton.value = "add book \u276F";  
    bookStatus.value = "addBook";

}

function deleteBook(id){

    const confirmBox = confirm("Are you really want to delete this book ?");
    if(confirmBox){
        $.ajax({

            type : 'POST',
            url  : 'ajax/deleteBook.php',
            data : {id},
            success : (response) => {
                const convertedRes = JSON.parse(response);
                if(convertedRes.status === "success"){
                    message.innerHTML = `<div class="alert success">
                            <div class="alert-icon"><div class="alertIcon">&check;</div></div>
                            <p> <strong>Success!</strong> ${convertedRes.msg} </p>
                        </div>`;
                        hidMessage();
                        fetchBooks();
                }
            }

        })
    }

}
