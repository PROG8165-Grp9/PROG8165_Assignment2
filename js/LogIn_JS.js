 var CheckUsername = /^[A-Za-z0-9_-]{5,}$/;
 var CheckPassword = /^[A-Za-z0-9_]{4,}$/; 
 var usernameLable = document.getElementById("usernameLable");
 var passwordLable = document.getElementById("passwordLable");

function validate(form){

  var username = form.username.value;
  var password = form.password.value;
 
 if(!CheckUsername.test(username)) {
        usernameLable.innerHTML = "Username should contain at least 5 characters."; 
        return false;
    }
    else {
        usernameLable.innerHTML = ""; 
    }    
 
 if(!CheckPassword.test(password)) {
        passwordLable.innerHTML = "Password should contain at least 4 characters."; 
        return false;
    }
    else {
        passwordLable.innerHTML = ""; 
    }    
    return true;
 
 }