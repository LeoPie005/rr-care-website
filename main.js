// ---- Year ----
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// ---- Mobile menu ----
var menuBtn = document.getElementById('menuBtn');
var mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', function () {
    var open = mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
}

// ---- Scroll reveal ----
var revealEls = document.querySelectorAll('[data-reveal]');
if (revealEls.length) {
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: show immediately
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }
}

// ---- Contact form ----
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    if (!name || !phone) return;
    contactForm.style.display = 'none';
    var success = document.getElementById('formSuccess');
    if (success) success.classList.add('visible');
  });
}
