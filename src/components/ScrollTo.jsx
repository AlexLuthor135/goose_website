import React from 'react';

const scrollTo = (id, offset = 50) => {
      if (!id) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        return;
      }
  
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        
        const scrollPosition = elementPosition - offset - window.innerHeight * 0.1;
  
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        });
      }
    };

export default scrollTo;