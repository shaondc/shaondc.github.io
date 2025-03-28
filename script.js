document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.querySelectorAll(".social-links a");
    
    socialLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });
        
        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    const projects = document.querySelectorAll(".projects li");
    
    projects.forEach(project => {
        project.addEventListener("click", function () {
            alert("You clicked on " + this.textContent);
        });
    });
});