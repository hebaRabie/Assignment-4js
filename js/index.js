document.addEventListener("DOMContentLoaded", function () {
    var emailLogin = document.getElementById("emailLogin");
    var passLogin = document.getElementById("passLogin");
    var loginButton = document.getElementById("LoginButton");
    var alertMessage = document.getElementById("Alert");
    var alertEmail = document.getElementById("emailAlert");
    var alertPass = document.getElementById("passAlert");
  
    loginButton.addEventListener("click", function (e) {
      e.preventDefault();
  
      var email = emailLogin.value;
      var password = passLogin.value;
  
      if (email && password) {
        checkUser(email, password);
      } 
    });
  
    function checkUser(email, password) {
      var allUsers = JSON.parse(localStorage.getItem("users")) || [];
  
      var userFound = false;
      for (var i = 0; i < allUsers.length; i++) {
        var user = allUsers[i];
        if (user.email === email && user.password === password) {
          userFound = true;
          localStorage.setItem("username", JSON.stringify(allUsers[i].name));
          window.location.href = "../home.html";
          break;
        } else if (user.email === email && user.password !== password) {
          alertPass.classList.remove("d-none");
          alertEmail.classList.add("d-none");
          alertMessage.classList.add("d-none");
        } else if (user.email !== email && user.password === password) {
          alertPass.classList.add("d-none");
          alertEmail.classList.remove("d-none");
          alertMessage.classList.add("d-none");
        } else if (user.email !== email && user.password !== password) {
          alertPass.classList.add("d-none");
          alertEmail.classList.add("d-none");
          alertMessage.classList.remove("d-none");
        }
      }
    }
  });

