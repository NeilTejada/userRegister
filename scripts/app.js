//create the constructor
function Student(
  email,
  password,
  firstName,
  lastName,
  age,
  grade101,
  grade102,
  grade103
) {
  this.studentEmail = email;
  this.studentPassword = password;
  this.studentFirstName = firstName;
  this.studentLastName = lastName;
  this.studentAge = age;
  this.studentGrade101 = grade101;
  this.studentGrade102 = grade102;
  this.studentGrade103 = grade103;
}

//create registration
function registerStudent() {
  //get inputs using jQuery
  let inputEmail = $("#txtEmail").val();
  let inputPassword = $("#txtPassword").val();
  let inputAge = $("#txtAge").val();
  let inputFirstName = $("#txtFirstName").val();
  let inputLastName = $("#txtLastName").val();
  let inputGrade101 = $("#txtGrade101").val();
  let inputGrade102 = $("#txtGrade102").val();
  let inputGrade103 = $("#txtGrade103").val();

  let newStudent = new Student(
    inputEmail,
    inputPassword,
    inputFirstName,
    inputLastName,
    inputAge,
    inputGrade101,
    inputGrade102,
    inputGrade103
  );

  save(newStudent); //this is from the storeManager.js
}

//create validation
function studentIsValid() {}

function init() {
  //hook events
  $("#btnRegister").on("click", registerStudent);
}

window.onload = init;
