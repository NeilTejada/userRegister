//create the constructor

let counter = 0;

function Student(
  email,
  password,
  firstName,
  lastName,
  age,
  grade101,
  grade102,
  grade103,
  ID
) {
  this.studentEmail = email;
  this.studentPassword = password;
  this.studentFirstName = firstName;
  this.studentLastName = lastName;
  this.studentAge = age;
  this.studentGrade101 = grade101;
  this.studentGrade102 = grade102;
  this.studentGrade103 = grade103;
  this.studentID = counter++;
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

    save(newStudent); // This is from the storeManager.js

    clearStudentForm();

    console.log(newStudent);
  } else {
    console.log("Student is not valid");
  }
}

// Create validation
function studentIsValid(aStudent) {
  let studentValidation = true;

  if (aStudent.studentEmail === "") {
    studentValidation = false;
    $("#txtEmail").addClass("error");
  } else {
    $("#txtEmail").removeClass("error");
  }
  if (aStudent.studentPassword === "") {
    studentValidation = false;
    $("#txtPassword").addClass("error");
  } else {
    $("#txtPassword").removeClass("error");
  }
  if (aStudent.studentAge === "") {
    studentValidation = false;
    $("#txtAge").addClass("error");
  } else {
    $("#txtAge").removeClass("error");
  }
  if (aStudent.studentFirstName === "") {
    studentValidation = false;
    $("#txtFirstName").addClass("error");
  } else {
    $("#txtFirstName").removeClass("error");
  }
  if (aStudent.studentLastName === "") {
    studentValidation = false;
    $("#txtLastName").addClass("error");
  } else {
    $("#txtLastName").removeClass("error");
  }
  if (aStudent.studentGrade101 === "") {
    studentValidation = false;
    $("#txtGrade101").addClass("error");
  } else {
    $("#txtGrade101").removeClass("error");
  }
  if (aStudent.studentGrade102 === "") {
    studentValidation = false;
    $("#txtGrade102").addClass("error");
  } else {
    $("#txtGrade102").removeClass("error");
  }
  if (aStudent.studentGrade103 === "") {
    studentValidation = false;
    $("#txtGrade103").addClass("error");
  } else {
    $("#txtGrade103").removeClass("error");
  }

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

function deleteStudent(ID) {
  console.log("Deleting student" + ID);
  let deleteIndex;
  let students = JSON.parse(localStorage.getItem("stringValue"));
  //Remove from html using jQuery
  $("#" + ID).remove();
  console.log(students);
  //Remove from array
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.studentID == ID) {
      deleteIndex = i;
      let stringValue = students.splice(deleteIndex, 1);
      localStorage.setItem("stringValue", JSON.stringify(stringValue));
    }
  }
}

function init() {
  //hook events
  $("#btnRegister").on("click", registerStudent);
}

window.onload = init;
