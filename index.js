const subtitle = document.getElementById("typing-text");
const text = "Web Developer | Designer | Freelancer";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    subtitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}

window.onload = typeEffect;


//  <script>
    // Top nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    // Bottom nav items
    const bottomNavItems = document.querySelectorAll('.bottom-nav .nav-item');

    function setActiveNav(href) {
      // Remove active from all
      navLinks.forEach(link => link.classList.remove('active'));
      bottomNavItems.forEach(item => item.classList.remove('active'));
      // Add active to top nav link
      navLinks.forEach(link => {
        if (link.getAttribute('href') === href) {
          link.classList.add('active');
        }
      });
      // Add active to bottom nav item
      bottomNavItems.forEach(item => {
        const a = item.querySelector('a');
        if (a && a.getAttribute('href') === href) {
          item.classList.add('active');
        }
      });
    }

    // Click events for top nav
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        setActiveNav(this.getAttribute('href'));
      });
    });
    // Click events for bottom nav
    bottomNavItems.forEach(item => {
      const a = item.querySelector('a');
      if (a) {
        a.addEventListener('click', function() {
          setActiveNav(this.getAttribute('href'));
        });
      }
    });

    // On page load, set active based on URL hash
    window.addEventListener('DOMContentLoaded', () => {
      setActiveNav(window.location.hash || '#home');
    });
    // On hash change (browser nav)
    window.addEventListener('hashchange', () => {
      setActiveNav(window.location.hash || '#home');
    });
  {/* </script> */}
