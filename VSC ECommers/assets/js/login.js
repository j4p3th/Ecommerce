document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
  
    if (username && password ) {
      // Redirect to the dashboard page
      window.location.href = 'index.html';
    } else {
      message.style.color = 'red';
      message.textContent = 'Invalid username or password.';
    }
  });