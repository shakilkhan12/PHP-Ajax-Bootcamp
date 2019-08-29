const form           = document.getElementById("myForm");
const name           = document.getElementById("name");
const email          = document.getElementById("email");
const password       = document.getElementById("password");
const nameError      = document.querySelector(".nameError");
const emailError     = document.querySelector(".emailError");
const passwordError  = document.querySelector(".passwordError");
let nameStatus       =  emailStatus = passwordStatus = true;

// Submit event listener
      form.addEventListener("submit", (e) => {

       e.preventDefault();

      //  Name validations
       if(Empty(name, "Full Name", nameError)){
          nameStatus = false;
          if(NotInt(name, "Full Name", nameError)){
             nameStatus = false;
             if(MinLen(name, "Full Name", nameError, 3)){
                nameStatus = false;

             } else {
                nameStatus = true;
             }

          } else {
             nameStatus = true;

          }
       } else {
          nameStatus = true;
       }



      //  Email validations
      if(Empty(email, "Email", emailError)){
        emailStatus = false;
        if(validEmail(email, "Email", emailError)){
           emailStatus = false;
           checkEmail(email, emailError, "users", "email").then((status) => {
              emailStatus = false;
              Register();
           }).catch((status) => {
              emailStatus = true;
              console.log("Sorry this email is already exist");
           })
          

        } else {
           emailStatus = true;

        }
      } else {
        emailStatus = true;
      }


      // Password validations
      if(Empty(password, "Password", passwordError)){
         passwordStatus = false;
         if(MinLen(password, "Password", passwordError, 5)){
            passwordStatus = false;
         } else {
            passwordStatus = true;
         }

      } else {
         passwordStatus = true;

      }
       

      function Register(){
         if(nameStatus === false && emailStatus === false && passwordStatus === false){
           
            // Submit register form
            $.ajax({

               type :  "POST",
               url  :  "ajax/registeration.php",
               data : $(form).serialize(),
               success : (feedback) => {
                  const convertedResponse = JSON.parse(feedback);
                  if(convertedResponse.status === "success"){
                     window.location = "login.php";
                  }
               }

            })


         }
      }

      })