const form           = document.getElementById("myForm");
const name           = document.getElementById("name");
const email          = document.getElementById("email");
const password       = document.getElementById("password");
const nameError      = document.querySelector(".nameError");
const emailError     = document.querySelector(".emailError");
let nameStatus       =  emailStatus = true;

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
           if(checkEmail(email, emailError, "users", "email")){
              emailStatus = false;

           } else {
              emailStatus = true;

           }

        } else {
           emailStatus = true;

        }
      } else {
        emailStatus = true;
      }
       

      console.log(nameStatus, emailStatus);

      })