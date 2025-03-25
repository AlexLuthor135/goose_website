import React from 'react';
import logo from '../assets/logo.svg';
import Button from './Button';
import scrollTo from './ScrollTo';

const MenuBar = () => {
    return (
        <div className="Buttons-container">
            <img src={logo} className="App-logo" alt="logo" onClick={() => scrollTo(null)}/>
            <Button scrollToId="Section-3-container" text={'LOREM'} scrollTo={scrollTo} className='ButtonMenuText'/>
            <Button scrollToId="Section-8-header" text={'LOREM'} scrollTo={scrollTo} className='ButtonMenuText'/>
            <Button scrollToId="Section-5" text={'LOREM'} scrollTo={scrollTo} className='ButtonMenuText'/>
            <Button scrollToId="about-section" text={'LOREM'} scrollTo={scrollTo} className='ButtonMenuText'/>
            <Button scrollToId="Section-9" text={'LOREM'} scrollTo={scrollTo} className='ButtonMenuText'/>
        </div>
    );
}

export default MenuBar;