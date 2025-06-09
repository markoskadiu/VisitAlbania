document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    const regionColors = {
      berat: "#b9835f",
      diber: "#1e5f74",
      durres: "#ffa07a",
      elbasan: "#556b2f",
      fier: "#8b4513",
      gjirokaster: "#5c5470",
      korce: "#9c6644",
      kukes: "#6a5acd",
      lezhe: "#4682b4",
      shkoder: "#2e8b57",
      tirane: "#8a2be2",
      vlore: "#20b2aa"
    };
  
    // Create observer with smooth scrolling and opacity changes
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sectionClass = Array.from(entry.target.classList)
          .find(cls => regionColors.hasOwnProperty(cls));
  
        if (entry.isIntersecting) {
          // Apply background color when section is in view
          if (sectionClass && document.body.style.backgroundColor !== regionColors[sectionClass]) {
            document.body.style.backgroundColor = regionColors[sectionClass];
          }
  
          // Fade in the section as it comes into view
          entry.target.classList.add('in-view');
        } else {
          // Fade out the section when out of view (optional)
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      root: null,
      threshold: 0.5 // Trigger when 50% of the section is in view
    });
  
    // Observe each section
    sections.forEach(section => observer.observe(section));
  });
  
  