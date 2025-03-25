import React, { useState, useEffect } from 'react';
import MenuBar from './components/MenuBar';
import Reserved from './components/Reserved';
import Home from './components/Home';
import Solutions from './components/Solutions';
import Experts from './components/Experts';
import Case from './components/Case';
import Contact from './components/Contact';
import About from './components/About';
import { preloadImages } from './components/PreloadImage';
import './css/App.css';
import './css/Section.css';
import './css/Learn.css';

import about_gradient from './assets/about_gradient.svg';
import about_image from './assets/about_image.svg';
import background from './assets/background.svg';
import button_bar from './assets/button_bar.svg';
import case_image from './assets/case_image.svg';
import case_line from './assets/case_line.svg';
import contact_image from './assets/contact_image.svg';
import dna_background from './assets/dna_background.svg';
import experts_image from './assets/experts_image.svg';
import logo_reserved from './assets/logo_reserved.svg';
import logo from './assets/logo.svg';
import solutions_image from './assets/solutions_image.svg';

import about_768 from './assets/768/about_image.svg';
import about_1024 from './assets/1024/about_image.svg';
import about_1366 from './assets/1366/about_image.svg';

import case_768 from './assets/768/case_image.svg';
import case_1024 from './assets/1024/case_image.svg';
import case_1366 from './assets/1366/case_image.svg';

import dna_768 from './assets/768/dna_background.svg';
import dna_1024 from './assets/1024/dna_background.svg';
import dna_1366 from './assets/1366/dna_background.svg';

import contact_768 from './assets/768/contact_image.svg';
import contact_1024 from './assets/1024/contact_image.svg';
import contact_1366 from './assets/1366/contact_image.svg';

import background_768 from './assets/768/background.svg';
import background_1024 from './assets/1024/background.svg';
import background_1366 from './assets/1366/background.svg';

export default function App() {

  useEffect(() => {
    const imageUrls = [
      about_gradient,
      about_image,
      background,
      button_bar,
      case_image,
      case_line,
      contact_image,
      dna_background,
      experts_image,
      logo_reserved,
      logo,
      solutions_image,
      about_768,
      about_1024,
      about_1366,
      case_768,
      case_1024,
      case_1366,
      dna_768,
      dna_1024,
      dna_1366,
      contact_768,
      contact_1024,
      contact_1366,
      background_768,
      background_1024,
      background_1366,
    ];

    preloadImages(imageUrls)
      .catch((err) => console.error('Error preloading images', err));

    const section1 = document.getElementById('Section-1');
    const section3 = document.getElementById('Section-3-container');
    const section5 = document.getElementById('Section-5');
    const section8 = document.getElementById('Section-8-header');
    const section9 = document.getElementById('Section-9');
    const about = document.getElementById('about-section');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    if (!section1 || !section3 || !section5 || !section8 || !section9 || !about || !overlay || !body) {
      console.warn("Element not found.");
      return;
    }

    const handleScroll = () => {
      const rect1 = section1.getBoundingClientRect();
      const rect3 = section3.getBoundingClientRect();
      const rect5 = section5.getBoundingClientRect();
      const rect8 = section8.getBoundingClientRect();
      const rect9 = section9.getBoundingClientRect();
      const rectAbout = about.getBoundingClientRect();

      const isSection1Visible = rect1.bottom > 0 && rect1.top < window.innerHeight;
      const isSection3Visible = rect3.top <= window.innerHeight * 0.6 && rect3.bottom >= window.innerHeight * 0.3;
      const isSection5Visible = rect5.top <= window.innerHeight * 0.6 && rect5.bottom >= window.innerHeight * 0.3;
      const isSection8Visible = rect8.top <= window.innerHeight * 0.9 && rect8.bottom >= -window.innerHeight * 0.4;
      const isSection9Visible = rect9.top <= window.innerHeight * 0.9 && rect9.bottom >= -window.innerHeight * 0.3;
      const isAboutVisible = rectAbout.top <= window.innerHeight * 0.8 && rectAbout.bottom >= -window.innerHeight * 0.3;

      if ((isSection3Visible || isSection5Visible) && !isSection1Visible) {
        overlay.style.opacity = '1';
      } else {
        overlay.style.opacity = '0';
        body.classList.remove('section-8-background');
        body.classList.remove('section-9-background');
        body.classList.remove('about-background');
      }

      if (isSection8Visible && !isSection1Visible) {
        body.classList.add('section-8-background');
      }
      if (isSection9Visible) {
        body.classList.add('section-9-background');
      }
      if (isAboutVisible && !isSection9Visible) {
        body.classList.add('about-background');
      }
    };


    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  return (
<main>
  <Reserved />
  <div id="overlay" className="overlay"></div>
  <MenuBar />
  <Home />
  <Solutions />
  <Case />
  <Experts />
  <About />
  <Contact />
  <div>
    
  </div>
</main>
  );
}
