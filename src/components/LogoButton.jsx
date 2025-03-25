import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const LogoButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="Buttons-container">
            <div className="logo-button" onClick={handleClick} style={{ cursor: 'pointer' }}>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    );
};

export default LogoButton;
