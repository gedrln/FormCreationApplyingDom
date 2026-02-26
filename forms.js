const form = document.getElementById("userForm");
const error = document.getElementById("error");
const tableBody = document.getElementById("tableBody");
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const ageInput = document.getElementById("age");
const genderInput = document.getElementById("gender");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;

  error.innerHTML = "";
  
if (fname === "" || lname === "" || age === "" || gender === "") {
  error.innerHTML = "All fields are required!";
  return; 
}
  
if (age <= 0) {
  error.innerHTML = "Age must be greater than 0!";
  return; 
}
  
tableBody.innerHTML += `
  <tr>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${age}</td>
    <td>${gender}</td>
    </tr>
`;
  form.reset();
});
