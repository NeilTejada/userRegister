function readUsers() {
  const studentTable = document.getElementById("studentList");
  let tr = "";

  const stringValue = JSON.parse(localStorage.getItem("stringValue")) || [];

  for (let i = 0; i < stringValue.length; i++) {
    let student = stringValue[i];

    tr += `
    <tr id="${student.studentID}">
      <td>${student.studentEmail}</td>
      <td>${student.studentFirstName}</td>
      <td>${student.studentLastName}</td>
      <td>${student.studentAge}</td>
      <td>${student.studentGrade101}</td>
      <td>${student.studentGrade102}</td>
      <td>${student.studentGrade103}</td>
      <td><button class="btn btn-danger" onClick="deleteStudent('${student.studentID}')">Delete</button></td>
    </tr>
  `;
  }
  studentTable.innerHTML = tr;
}
window.onload = readUsers;
