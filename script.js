function check() {
  var password = document.getElementById("pass").value;
  var username = document.getElementById("usr").value;
  var passwords = data;
  var names = data;
  for (i = 0; i < passwords.length; i++) {
    if (password == passwords[i].password && username == names[i].username) {
      swal("👌", "done", "success");
      return false;
    }
    swal("Password Incorrect", "You Have entered Wrong Password", "error");
    return false;
  }
}

//   return false; var passwords = data;
