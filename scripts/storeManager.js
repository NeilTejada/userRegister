function save(student) {
  let stringValue = JSON.parse(localStorage.getItem("stringValue")) || [];
  stringValue.push(student);
  localStorage.setItem("stringValue", JSON.stringify(stringValue));
}
