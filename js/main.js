/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


  function formValidation() {

    var user = document.getElementById("username").value ;
    var email = document.getElementById("email").value ;
    var phone = document.getElementById("phone").value ;
    var error = document.getElementById("error");
    var text = "";


    if (user.length < 3) {
        text = "plz enter valid user";
        error.innerHTML = text ;
        return false ;
    }
    
    else if (email.indexOf("@") == -1) {
        text = "plz enter valid email";
        error.innerHTML = text ;
        return false ;
    }

    else if (isNaN(phone) || phone.length !=11) {
        text = "plz enter valid phone";
        error.innerHTML = text ;
        return false ;
    }
    else {
        alert("done") ;
        return true ;
    }


  }