// Handle form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Here you can add your logic to send the data to a server or display a success message
    alert(`Signup Successful! Welcome, ${username}.`);
  });
  