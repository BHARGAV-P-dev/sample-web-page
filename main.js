// When the page loads
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('changeTextBtn');
    
    btn.addEventListener('click', () => {
      btn.textContent = "Thanks for clicking!";
    });
  });
  