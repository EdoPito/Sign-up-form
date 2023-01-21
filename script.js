const form= document.querySelector("form");
const name= document.getElementById("name_input");
const surname= document.getElementById("surname_input");
const email= document.getElementById("email_input");
const password= document.getElementById("psw_input");
const errorImg= document.querySelectorAll('img');
const error= document.getElementsByClassName('error');

const nameRegex= /^[a-zA-Z ]{1,30}$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

form.addEventListener("submit",function (event){
    event.preventDefault();



// name bit
    if(name.value.match(nameRegex)){
        name.style.borderColor= 'green';
        name.style.borderWidth= '2px';

    }else if(name.value.length === 0){
        name.style.borderColor = 'red';
      errorImg[0].style.display= 'block';
      error[0].style.display= 'block';
    }
    else if(!isNaN(name.value)){
      name.style.borderColor = 'red';
      errorImg[0].style.display= 'block';
      error[0].style.display= 'block';
      error[0].innerText= 'Please use letters only';
    }else{
      name.style.borderColor = 'red';
      errorImg[0].style.display= 'block';
      error[0].style.display= 'block';
    }





// surname bit
    if(surname.value.match(nameRegex)){
        surname.style.borderColor= 'green';
        surname.style.borderWidth= '2px';
    }
    else if(surname.value.length === 0){
        surname.style.borderColor = 'red';
      errorImg[1].style.display= 'block';
      error[1].style.display= 'block';
    }else if(!isNaN(name.value)){
        surname.style.borderColor = 'red';
      errorImg[1].style.display= 'block';
      error[1].style.display= 'block';
      error[1].innerText= 'Please use letters only';
    }else{
       surname.style.borderColor = 'red';
        errorImg[1].style.display= 'block';
        error[1].style.display= 'block';
      }
// email bit

    if(email.value.match(emailRegex)){
        email.style.borderColor= 'green';
        email.style.borderWidth= '2px';
    }else{
        email.style.borderColor= 'red';
        errorImg[2].style.display= 'block';
        error[2].style.display= 'block';
    }

// password bit 

   if(password.value.match(passRegex)){
    password.style.borderColor= 'green';
    password.style.borderWidth= '2px';
   }else{
    password.style.borderColor= 'red';
    errorImg[3].style.display= 'block';
    error[3].style.display= 'block';
   }

   event.blur()

})