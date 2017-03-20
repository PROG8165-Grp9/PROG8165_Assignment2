 var CheckUsername = /^[A-Za-z0-9_]{5,}$/;
 var CheckPassword =  /^^[A-Za-z0-9_]{4,}$/;

function validate(form){

 var username = form.username.value;
 var password = form.password.value;
 var errors = [];
 
 if (!CheckUsername.test(username)) {
  errors[errors.length] = "- Username must be at least 5 characters long.";
 }

 if (!CheckPassword.test(password)) {
  errors[errors.length] = "- Password must be at least 4 characters long.";
 }
 
 if (errors.length > 0) {
  result(errors);
  return false;
 }
 
 return true;
}

function result(errors){
 var msg = "Invalid Data! ";
 for (var i = 0; i<errors.length; i++) {
  msg += "<br />" + errors[i];
 }
 document.getElementById("demo").innerHTML = msg;
}
