document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Handle the login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  
    alert('Login form submitted!');
  });
  