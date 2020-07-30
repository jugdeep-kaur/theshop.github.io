function Captcha(){
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
            '0','1','2','3','4','5','6','7','8','9');
    var i;
    for (i=0;i<6;i++){
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
                     }
        var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
        document.getElementById("mainCaptcha").innerHTML = code
        document.getElementById("mainCaptcha").value = code
      }
function ValidCaptcha(){
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 =         removeSpaces(document.getElementById('txtInput').value);
    if (string1 == string2){
           return true;
    }else{        
         alert("Fix captcha mismatch!");
         return false;
         }
}
function removeSpaces(string){
    return string.split(' ').join('');
}

function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    var x2 = document.forms["myForm"]["uname"].value;
    if (x2 == "") {
      alert("User Name must be filled out");
      return false;
    }
    var x4 = document.forms["myForm"]["email"].value;
    if (x4 == "") {
      alert("Email must be filled out");
      return false;
    }
    var x4 = document.forms["myForm"]["email"].value;
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x4))) {
      alert("Email must be in valid format");
      return false;
    }

    return ValidCaptcha();
  }

  function loginFn()
  {
    var x = document.forms["loginForm"]["name"].value;
    var p = document.forms["loginForm"]["pass"].value;
    if(x=="john" && p=="pass")
    {
        alert("Login Success!")
        return true;
    }
    else
    {
        alert("Invalid credentials! Try Again!")
        return false;
    }


  }