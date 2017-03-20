function validateForm() {
    var email = document.registration.email.value;
    var fname = document.registration.fname.value;
    var lname = document.registration.lname.value;    
    var username = document.registration.username.value;
    var password = document.registration.password.value;  
        
    if(checkEmail(email))  
    {  
    if(checkName(fname, lname))  
    {  
    if(checkUsername(username))  
    {  
    if(checkPassword(password))  
    { 
    }  
    }  
    }  
    }  
    return false;        
    function checkEmail(email)  
    {      
    var chk_email = /.+\@.+\..+/; //Contain an @ character, as well as it should end with an en extension of 2 or more characters. 
    if(email.value.match(chk_email))  
    {  
    return true;  
    }  
    else  
    {  
    Document.getElementsByName("emailLable").innerHTML("Username must have alphabet characters only");    
    email.focus();  
    return false;  
    }  
    }  
    function checkName(fname, lname)  
    {   
    var chk_name = /^[A-Z][a-z0-9  ]{1,50}$/;   // The names must start with a capital characters whilst the rest must be lower case, A-z, 0-9, space
    if(fname.value.match(chk_name)&lname.value.match(chk_name))  
    {  
    return true;  
    }  
    else  
    {  
    Document.getElementsByName("fnameLable").innerHTML("Username must have alphabet characters only");    
    fname.focus();  
    return false;  
    }  
    }  
    function checkUsername(username)  
    {   
    var chk_username = /^[\w -]{5,20}$/; //Minimum 5 characters, A-z, 0-9, _- and space
    if(username.value.match(chk_username))  
    {  
    return true;  
    }  
    else  
    {  
    Document.getElementsByName("usernameLable").innerHTML("Username must have alphabet characters only");    
    username.focus();  
    return false;  
    }  
    }  
    function checkPassword(password)  
    {   
    var chk_password =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet and 1 Number
    if(password.value.match(chk_password))  
    {  
    return true;  
    }  
    else  
    {  
    Document.getElementsByName("passwordLable").innerHTML("Username must have alphabet characters only");    
    password.focus();  
    return false;  
    }  
    }  
}