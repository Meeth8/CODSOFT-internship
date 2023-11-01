document.querySelector("header").addEventListener("click", function (event) {
    event.preventDefault(); 

    const target = event.target.getAttribute("href"); 

    if (target === "#about") {
        const workExperienceSection = document.querySelector("#work-experience");
        const projectsSection = document.querySelector("#projects");

        if (workExperienceSection && projectsSection) {
            workExperienceSection.scrollIntoView({
                behavior: "smooth"
            });

            
            setTimeout(function () {
                projectsSection.scrollIntoView({
                    behavior: "smooth"
                });
            }, 1000);
        }
    } else if (target === "#home") {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    } else if (target === "#connect") {
        document.querySelector("footer").scrollIntoView({
            behavior: "smooth"
        });
    }
});
