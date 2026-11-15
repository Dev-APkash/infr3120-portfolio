// Show a message when the contact form is submitted
var form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for your message!');
    form.reset();
  });
}
