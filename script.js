document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
  
    // Perform any additional validation or send the data to your backend here
  
    console.log('Form submitted', { name, email, message });
  
    alert('Thank you for contacting me!');
  });
  