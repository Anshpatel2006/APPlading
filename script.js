document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.getElementById('navbarNav');
    var navLinks = document.querySelectorAll('.nav-link');
    var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
          bsCollapse.hide();
        }
      });
    });
  });

// Bootstrap validation for Contact Us form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    if (!contactForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    contactForm.classList.add('was-validated');
  });
} 