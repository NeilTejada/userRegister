function save(student) {
  let stringValue = JSON.stringify(student);
  localStorage.setItem("student", stringValue);
}
