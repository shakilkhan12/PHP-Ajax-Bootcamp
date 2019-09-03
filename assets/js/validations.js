function Empty(input, label, errorClass){

   const fieldName = input.value.trim();
   if(fieldName == ''){

       errorClass.innerHTML = label + " is required";
       input.classList.add("borderRed");
       return false;

   } else {
    
       errorClass.innerHTML = "";
       input.classList.remove("borderRed");
       return true;
    
   }

}


function NotInt(input, label, errorClass){

  const reg = /^[a-zA-Z ]+$/;
  if(reg.test(input.value.trim())){
    errorClass.innerHTML = "";
    input.classList.remove("borderRed");
      return true;
  } else {
    errorClass.innerHTML = label + " not be integer";
    input.classList.add("borderRed");
    return  false;
  }

}


function MinLen(input, label, errorClass, min){

   const fieldName = input.value.trim();
   if(fieldName.length < min){
    errorClass.innerHTML = label + " must be " + min + " characters long";
    input.classList.add("borderRed");
    return false;
   } else {
    errorClass.innerHTML = "";
    input.classList.remove("borderRed");
    return true;
   }

}


function validEmail(input, label, errorClass){

    // udemy@support.com
  const reg = /^[a-zA-Z]+[0-9a-zA-Z_\.]*@[a-zA-Z]+\.[a-z]+$/;
  if(reg.test(input.value.trim())){
    errorClass.innerHTML = "";
    input.classList.remove("borderRed");
    return true;
  } else {
    errorClass.innerHTML = label + " format invalid";
    input.classList.add("borderRed");
    return false;
  }

}


function checkEmail(input, errorClass, tableName, column){

   const fieldName = input.value.trim();

   return new Promise((resolve, reject) => {

    $.ajax({

      type  :  "POST",
      url   :  "ajax/checkEmail.php" ,
      data  : { email:  fieldName, tableName: tableName, column: column},
      success : (feedback) => {
           
          const convertFeedback = JSON.parse(feedback);
          if(convertFeedback.status === "error"){
              errorClass.innerHTML = convertFeedback.msg;
              input.classList.add("borderRed");
              reject(false);
              
          } else {
              errorClass.innerHTML = "";
              input.classList.remove("borderRed");
              resolve(true);
              
          }
      }
  
     })

   });



}


function Positive(input, label, errorClass){

  const field = input.value.trim();
  if(field < 1){
    errorClass.innerHTML = label + " must be greater than 0";
    input.classList.add("borderRed");
    return false;
  } else {
    errorClass.innerHTML = "";
    input.classList.remove("borderRed");
    return true;
  }

}
