document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(form);

    // Prepare data for submission
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
      name: formData.get('name')
    };

    // Send data to the server
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Signup successful!');
        window.location.href = '/login'; // Redirect to login or other page
      } else {
        alert('Signup failed: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred during signup.');
    });
  });
});
