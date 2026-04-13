document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMsg');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name && email && message) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        setTimeout(() => {
          contactForm.classList.add('hidden');
          successMsg.classList.remove('hidden');
        }, 1500);
      }
    });
  }
});
