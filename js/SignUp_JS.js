var chk_email = /.+\@.+\..+/; //Contains an @ character, as well as it should end with an en extension of 2 or more characters. 
var chk_name = /^[A-Z][\w  ]{1,50}$/;   // The names must start with a capital characters whilst the rest must be lower case, A-z, 0-9, space
var chk_username = /^[\w -]{5,20}$/; //Minimum 5 characters, A-z, 0-9, _- and space
var emailLable = document.getElementById("emailLable");
var fnameLable = document.getElementById("fnameLable");
var lnameLable = document.getElementById("lnameLable");
var usernameLable = document.getElementById("usernameLable");

function validateForm(form) {
    var email = registration.email.value;
    var fname = registration.fname.value;
    var lname = registration.lname.value;    
    var username = registration.username.value;
    
    if(!chk_email.test(email)) {
       emailLable.innerHTML = "Correct format : example@domain.com";     
       return false;        
    }
    else {
       emailLable.innerHTML = "";
    }
    
    if(!chk_name.test(fname)) {
        fnameLable.innerHTML = "First name should start with a capital character.";         
        return false;
    }
    else {
        fnameLable.innerHTML = "";        
    }
    if(!chk_name.test(lname)) {
        lnameLable.innerHTML = "Last name should start with a capital character.";
        return false;
    }
    else {
        lname.innerHTML = "";
    }

    if(!chk_username.test(username)) {
        usernameLable.innerHTML = "Username should contain at least 5 characters."; 
        return false;
    }
    else {
        usernameLable.innerHTML = ""; 
    }    
    return true;
    
}

