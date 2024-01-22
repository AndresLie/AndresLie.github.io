// script.js
document.querySelector('nav').addEventListener('mouseenter', function() {
    document.querySelector('body').style.marginLeft = '20vw';
});

document.querySelector('nav').addEventListener('mouseleave', function() {
    document.querySelector('body').style.marginLeft = '3.66vw';
});



window.onload = function() {
    const textElement = document.getElementById("trans-text");
    const texts = [ " Student", " Web Developer", "n AI Developer"];
    let currentIndex = 0;

    function updateText() {
        // Fade out text
        textElement.style.opacity = '0';

        setTimeout(() => {
            // Update text
            currentIndex = (currentIndex + 1) % texts.length;
            textElement.textContent = texts[currentIndex];

            // Fade in text
            textElement.style.opacity = '1';
        }, 1000); // Time to wait while text is invisible
    }

    setInterval(updateText, 2000); // Change text every 4 seconds
};

const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        // Add event listeners for mouseenter and mouseleave
        item.addEventListener('mouseenter', () => {
            // When hovered, add blurred class to all other items
            projectItems.forEach(pi => {
                if (pi !== item) {
                    pi.classList.add('project-item-blurred');
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            // When not hovered, remove blurred class from all items
            projectItems.forEach(pi => {
                pi.classList.remove('project-item-blurred');
            });
        });
    });


    document.addEventListener("DOMContentLoaded", function() {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);  // Stop observing the section after it becomes visible
            }
          });
        }, { threshold: 0.1 });  // Adjust the threshold as needed
      
        // Target the sections
        document.querySelectorAll("section").forEach(section => {
          observer.observe(section);
        });
      });
      