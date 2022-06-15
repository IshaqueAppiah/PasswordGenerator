var password=document.getElementById("password");



 function genPassword() {
    var chars =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    let passwordLength = 5;
    let password = "";

    let password2='';
 for (var i = 1; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   var randomNumber2 = Math.floor(Math.random() * chars.length);
   password += chars[randomNumber];
   password2 +=chars[randomNumber2];

  

  }
        document.getElementById("password1").value = password;
        document.getElementById('password2').value=password2;
 }



  function copyPassword() {
  var copyText = document.getElementById("password1");
  copyText.select();
  document.execCommand("copy");  
}

function copyPassword2() {
  var copyText2 = document.getElementById("password2");
  copyText2.select();
  document.execCommand("copy");  
}