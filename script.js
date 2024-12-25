### JavaScript (script.js)

```javascript
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Signup Details:", { username, email, password });

  alert("Signup successful!");
});