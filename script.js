document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.querySelectorAll(".social-links a");
    const projects = document.querySelectorAll(".projects li");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    
    socialLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
            this.style.color = "#ff4500";
        });
        
        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.color = "#ffffff";
        });
    });

    projects.forEach(project => {
        project.addEventListener("click", function () {
            alert("Explore more about: " + this.textContent);
        });
    });

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});