import React from 'react';
import solutions_image from '../assets/experts_image.svg';

const Experts = () => {
    return (
        <div>
            <div id="Section-5-container" className="Section-5-container">
                <section id="Section-5" className="Section-5">
                    <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong>
                    <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    <br />laboris nisi ut aliquip ex ea commodo consequat.
                    <br />Duis aute irure dolor in reprehenderit in voluptate velit esse
                    <br />cillum dolore eu fugiat nulla pariatur.
                    <br />Excepteur sint occaecat cupidatat non proident.</p>
                    <img src={solutions_image} alt="Experts Image" className="Section-5-image" />
                </section>
            </div>
            <div>
                <section id='section-6' className="Section-6">
                    <ul>
                        <li>
                            <div className="content">
                                <p><strong>Lorem ipsum</strong></p>
                                <p><strong>Lorem ipsum</strong></p>
                                <p><strong>Lorem ipsum</strong></p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
            <div>
                <section id='section-7' className="Section-7">
                    <p><strong>Lorem ipsum
                    <br />Lorem ipsum</strong></p>
                </section>
            </div>
        </div>
    );
}

export default Experts;