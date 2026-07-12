(function() {
    // Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', function() {
            toggle.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
        // Close menu on link click (excluding dropdown triggers)
        navLinks.querySelectorAll('a').forEach(function(link) {
            if (link.classList.contains('dropdown-trigger')) {
                return;
            }
            link.addEventListener('click', function() {
                toggle.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    // Dropdown toggling for mobile / touch devices
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(function(dropdown) {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        if (trigger) {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('open');
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        dropdowns.forEach(function(dropdown) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });
    });

    // Header scroll shadow
    var header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
})();
