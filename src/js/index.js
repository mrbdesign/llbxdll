document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section'); // Use the common class

  if (sections.length > 0) { // Check if any sections were found
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('animate');
                      observer.unobserve(entry.target); // Only animate once
                  }
              });
          },
          {
              threshold: 0.1,
          }
      );

      sections.forEach((section) => {
          observer.observe(section);
      });
  } else {
      console.warn('No elements with the class "section" found.');
  }
});
