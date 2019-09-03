const bookForm          = document.getElementById("bookForm");
const bookName          = document.getElementById("bookName");
const bookAuthor        = document.getElementById("bookAuthor");
const bookPrice         = document.getElementById("bookPrice");
const nameError         = document.querySelector(".nameError");
const autherError       = document.querySelector(".authorError");
const priceError        = document.querySelector(".priceError");
const bookStatus        = document.getElementById("bookStatus");
const message           = document.querySelector(".message");
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
                        fetchBooks()
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
			    <td><a href="" class="btn btn-warning btn-small showModel">Edit <span>&#9998;</span></a></td>
			    <td><a href="" class="btn btn-danger btn-small">Delete <span>&#10006;</span></a></td>
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
                 table.innerHTML = `No Recods`;
            }
        }

    })


}

fetchBooks();




