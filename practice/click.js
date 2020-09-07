var username = "Harsh";
var password = "harsh@123";


function authentication()
{
  var user_input = document.getElementById('html_name').value;
  var user_password = document.getElementById('html_password').value;

  if(username==user_input && password==user_password)
  {
    document.body.style.backgroundColor = "yellow";
    alert("Access Granted");
  }
  else{
    document.body.style.backgroundColor = "red";
    alert("Access Denied");
  }
  
}