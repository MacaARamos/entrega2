
// Scroll Animation on Book page

document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".content-row");
  
    function handleScroll() {
      rows.forEach(row => {
        const rowTop = row.getBoundingClientRect().top;
        const rowBottom = row.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
  
        if (rowTop < windowHeight * 0.9 && rowBottom > 0) {  
          row.classList.add("visible");
        } else {
          row.classList.remove("visible"); // Remove when out of view
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load to check initial visibility
  });

  //Pop-uo Form Let's work together
  
  document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup-form");
    const openBtn = document.querySelector(".cta-box button"); 
    const closeBtn = document.querySelector(".close-btn");
  
    // Open Popup
    openBtn.addEventListener("click", function () {
      popup.classList.add("show");
    });
  
    // Close Popup
    closeBtn.addEventListener("click", function () {
      popup.classList.remove("show");
    });
  
    // Close when clicking outside the form
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        popup.classList.remove("show");
      }
    });
  });
  
  // Drone landing page animation

  document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".drone-landing");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.classList.add("visible"); // Apply fade-in effect
            video.play(); // Start playing
          } else {
            video.pause(); // Pause when out of view
          }
        });
      },
      { threshold: 0.5 } // Video must be at least 50% visible
    );
  
    observer.observe(video);
  });
  