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

  if (studentIsValid(newStudent)) {
    console.log("Student is valid");
    save(newStudent); //this is from the storeManager.js

    clearStudentForm();
    console.log(newStudent);
  } else {
    console.log("Student is not valid");
  }
}

// Create validation
function studentIsValid(aStudent) {
  const studentFieldNames = [
    "studentEmail",
    "studentPassword",
    "studentAge",
    "studentFirstName",
    "studentLastName",
    "studentGrade101",
    "studentGrade102",
    "studentGrade103",
  ];
  let studentValidation = true;

  let inputFieldValues = {
    studentEmail: $("#txtEmail"),
    studentPassword: $("#txtPassword"),
    studentAge: $("#txtAge"),
    studentFirstName: $("#txtFirstName"),
    studentLastName: $("#txtLastName"),
    studentGrade101: $("#txtGrade101"),
    studentGrade102: $("#txtGrade102"),
    studentGrade103: $("#txtGrade103"),
  };

  studentFieldNames.forEach((fieldName) => {
    let inputValue = aStudent[fieldName];
    let inputElement = inputFieldValues[fieldName];
    inputElement.removeClass("error");

    if (inputValue === "") {
      studentValidation = false;
      inputElement.addClass("error");
    }
  });

  return studentValidation;
}

function clearStudentForm() {
  $("#txtEmail").val("");
  $("#txtPassword").val("");
  $("#txtAge").val("");
  $("#txtFirstName").val("");
  $("#txtLastName").val("");
  $("#txtGrade101").val("");
  $("#txtGrade102").val("");
  $("#txtGrade103").val("");
}

function init() {
  //hook events
  $("#btnRegister").on("click", registerStudent);
}

window.onload = init;
