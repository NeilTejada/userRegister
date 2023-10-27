function login() {
  let email = $("#txtEmail").val();
  let password = $("#txtPassword").val();

  let registeredStudents =
    JSON.parse(localStorage.getItem("stringValue")) || [];

  let savedStudent = null;

  for (let i = 0; i < registeredStudents.length; i++) {
    let student = registeredStudents[i];
    if (student.studentEmail === email) {
      savedStudent = student;
      break;
    }
  }

  if (savedStudent) {
    if (savedStudent.studentPassword === password) {
      window.location.href = "users.html";
      console.log("Login successful");
      console.log("Student email: " + savedStudent.studentEmail);
    } else {
      console.log("Password is incorrect");
    }
  } else {
    console.log("Email not registered");
  }
}

function init() {
  $("#btnLogin").on("click", login);
}

window.onload = init;
