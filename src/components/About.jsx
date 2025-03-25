import React from 'react';
import '../css/About.css'; // Make sure to adjust the path based on your project structure

const LayoutPage = () => {
  return (
    <div className='about-page'>
      <div>
        <section id='about-section' className="about-section">
          <div className='text-group'>
            <p className='we'>lorem</p>
            <ul className="word-list">
              <li>LOREM</li>
              <li>LOREM</li>
              <li>LOREM</li>
              <li>LOREM</li>
            </ul>
          </div>
          <span className='innovate'>LOREM</span>
        </section>
      </div>
      <div>
        <span className='bar-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <section id='about-list' className="about-list">
            <div className="left-side">
              <p>
                <span>
                  <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                  <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br />Ut enim ad minim veniam.
                  </li>
                </span>
              </p>
            </div>
            <div className="right-side">
              <p>
                <span>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br />Ut enim ad minim veniam.
                  </li>
                </span>
              </p>
            </div>
        </section>
    </div>
  );
};

export default LayoutPage;
