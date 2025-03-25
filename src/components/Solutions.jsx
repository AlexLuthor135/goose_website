import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import scrollTo from './ScrollTo';
import solutions_image from '../assets/solutions_image.svg';

const Solutions = () => {
    return (
        <div>
            <div id="Section-3-container" className="Section-3-container">
                <section id="Section-3" className="Section-3">
                    <p>Loremn <em><strong>ipsum</strong></em>
                    <br />dolor <em><strong>sit</strong></em> amet,
                    <br />consectetur <em><strong>adipiscing </strong></em>elit.
                    <br />Sed <em><strong>do eiusmod</strong></em> tempor incididunt
                    <br /><em><strong>ut labore</strong></em> et dolore magna aliqua.
                    <br />Ut enim ad minim <em><strong>veniam</strong></em>.</p>
                    <img src={solutions_image} alt="Solutions Image" className="Section-3-image" />
                </section>
            </div>
            <div>
                <section id='Section-4' className="Section-4">
                    <ul>
                        <li>
                            <div className="content">
                                <p>
                                    <strong>
                                        LOREM IPSUM DOLOR
                                    </strong>
                                        <br />
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                        </span>
                                        <br /><Link to="/clinical-support" className="learn-more-button">Learn More</Link>
                                </p>
                                <p>
                                    <strong>
                                        LOREM IPSUM DOLOR
                                    </strong>
                                    <br />
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                    </span>
                                    <br /><Link to="/quality-and-compliance" className="learn-more-button">Learn More</Link></p>
                                <p>
                                    <strong>
                                        REGULATORY AFFAIRS OPTIMIZATION
                                    </strong>
                                    <br />
                                    <span>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud..
                                    </span>
                                    <br /><Button scrollToId="Section-8-header" text={'Learn More'} scrollTo={scrollTo} className={'learn-more-button'}/>
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Solutions;