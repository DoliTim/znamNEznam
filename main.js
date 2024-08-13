document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: false, // Disable automatic sliding
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });

  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
  });

  // Optional: Close menu when a link is clicked
  document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', () => {
          navbar.classList.remove('active');
      });
  });

  // Add event listeners for Log In and Sign Up buttons
  const loginButtons = document.querySelectorAll('.login-btn');
  const signupButtons = document.querySelectorAll('.signup-btn');

  loginButtons.forEach(btn => {
      btn.addEventListener('click', () => {
          alert('Log In clicked');
          // Add your login logic here
      });
  });

  signupButtons.forEach(btn => {
      btn.addEventListener('click', () => {
          alert('Sign Up clicked');
          // Add your signup logic here
      });
  });
});
