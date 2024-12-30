// Wait until the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll for internal links (anchors)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust scroll offset (80px for header)
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toggle the active class in the navbar (highlight current page)
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Scroll to top button (appears when you scroll down)
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.textContent = "↑ Scroll to Top";
    scrollToTopButton.classList.add("scroll-to-top");
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Show scroll-to-top button when user scrolls down
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Placeholder for form validation (can be expanded for contact form)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener("submit", function(e) {
            const name = form.querySelector("input[name='name']").value;
            const email = form.querySelector("input[name='email']").value;
            const message = form.querySelector("textarea[name='message']").value;

            if (!name || !email || !message) {
                alert("Please fill in all the fields.");
                e.preventDefault();
            }
        });
    }

    // Example of project filtering by category (if you have categories)
    const filterButtons = document.querySelectorAll(".filter-button");
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", function() {
                const category = this.getAttribute("data-category");
                const projects = document.querySelectorAll(".project-card");
                projects.forEach(project => {
                    if (category === "all" || project.classList.contains(category)) {
                        project.style.display = "block";
                    } else {
                        project.style.display = "none";
                    }
                });
            });
        });
    }
});
