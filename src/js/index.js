document.addEventListener('DOMContentLoaded', () => {
    // Footer Loading
    fetch('/footer.html')
      .then(response => response.text())
      .then(data => {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
          footerPlaceholder.innerHTML = data; // Load footer into the placeholder
        } else {
          console.warn('Footer placeholder not found: Ensure <div id="footer-placeholder"></div> exists in the HTML.');
        }
      })
      .catch(error => {
        console.error('Error loading footer:', error);
      });
  
    // Animate Sections on Scroll
    const sections = document.querySelectorAll('.section'); // Use the common class
    if (sections.length > 0) {
      // Check if any sections were found
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
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
  
      sections.forEach(section => {
        observer.observe(section);
      });
    } else {
      console.warn('No elements with the class "section" found: Ensure elements with class "section" exist.');
    }
  
    // Grid Item Click Handling
    document.querySelectorAll('[class*="section"]').forEach(item => {
      item.addEventListener('click', e => {
        const classList = e.currentTarget.classList;
        let sectionNumber = null;
  
        for (const className of classList) {
          if (className.startsWith('section')) {
            sectionNumber = className.replace('section', '');
            break;
          }
        }
  
        if (sectionNumber) {
          const pageName = getSectionPageName(sectionNumber);
          window.location.href = `/${pageName}.html`;
        } else {
          console.warn('Could not determine section number.');
        }
      });
    });
  
    function getSectionPageName(sectionNumber) {
      const pageNames = {
        '1': 'logo',
        '2': 'little_world',
        '3': 'pixel_world',
        '4': 'educational_design',
        '5': 'ar_xr',
        '6': 'works',
        '7': 'about',
        '8': '3d',
        '9': 'exhibitions',
        '10': 'web3',
        '11': 'contact',
      };
      return pageNames[sectionNumber] || 'index';
    }
  });
  