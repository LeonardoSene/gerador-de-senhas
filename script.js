
  function generatePassword() {
    var length = document.getElementById("length").value;
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;

    var characterSet = "";
    var password = "";

    if (uppercase) {
      characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowercase) {
      characterSet += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numbers) {
      characterSet += "0123456789";
    }

    if (symbols) {
      characterSet += "!@#$%^&*()";
    }

    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet[randomIndex];
    }

    var passwordOutput = document.getElementById("passwordOutput");
    passwordOutput.textContent = "Sua senha: " + password;
  }

