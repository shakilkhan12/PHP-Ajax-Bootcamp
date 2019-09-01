const loginForm = document.getElementById("loginForm");
const email     = document.getElementById("email");
const password  = document.getElementById("password");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");
let emailStatus = passwordStatus = true;
// Event listener form login form
      loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        // Email validation
        if(Empty(email, "Email", emailError)){
            emailStatus = false;
        } else {
            emailStatus = true;
        }

        // Password validation
        if(Empty(password, "Password", passwordError)){
            passwordStatus = false;
        } else {
            passwordStatus = true;
        }

        // Submit login form

        if(emailStatus === false && passwordStatus === false){
            
            $.ajax({
                type :  "POST",
                url  :  "ajax/login.php",
                data : $(loginForm).serialize(),
                success : (feedback) => {
                    const convertedResponse = JSON.parse(feedback);
                    if(convertedResponse.status === "ok"){
                        window.location = "dashboard.php";
                    } else if(convertedResponse.status === "PasswordError"){
                        passwordError.innerHTML = convertedResponse.msg;
                        password.classList.add("borderRed");
                        email.classList.remove("borderRed");
                    } else if(convertedResponse.status === "emailNotFound"){
                        emailError.innerHTML = convertedResponse.msg;
                        email.classList.add("borderRed");
                        password.classList.remove("borderRed");
                    }
                }
            })
        }

      })