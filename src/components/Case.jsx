import React, { useState } from 'react';
import CaseLine from '../assets/case_line.svg';
import Popup from './Popup.jsx';
import { LiteratureSearch, OffshoreLCMContent, PatientProfiles, QMSImplementation, SeriousAdverse } from './PopupText.jsx';

export default function Case() {
    const [activePopup, setActivePopup] = useState(null);

    const handlePopupOpen = (content) => {
        setActivePopup(content);
    };
    
    const handlePopupClose = () => {
        setActivePopup(null);
    };

    return (
        <div className='case-section'>
            <h1 id='Section-8-header' className='Section-8-header'>LOREM</h1>
            <ul className='Section-8-list'>
                <li className='Section-8-item'>
                    <h2 className='Section-8-item-header'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                    <p 
                        className='Section-8-item-text'
                        onClick={() => handlePopupOpen(<PatientProfiles />)}
                        style={{ cursor: 'pointer' }}
                    >
                        Lorem ipsum dolor.
                    </p>
                    <p 
                        className='Section-8-item-text'
                        onClick={() => handlePopupOpen(<LiteratureSearch />)}
                        style={{ cursor: 'pointer' }}
                    >
                        Lorem ipsum dolor.
                    </p>
                    <p 
                        className='Section-8-item-text'
                        onClick={() => handlePopupOpen(<SeriousAdverse />)}
                        style={{ cursor: 'pointer' }}
                    >
                        Lorem ipsum dolor.
                    </p>
                    <img className='Section-8-item-image' src={CaseLine} alt='Caseline'/>
                </li>
                <li className='Section-8-item'>
                    <h2 className='Section-8-item-header'>LOREM</h2>
                    <p 
                        className='Section-8-item-text'
                        onClick={() => handlePopupOpen(<QMSImplementation />)}
                        style={{ cursor: 'pointer' }}
                    >
                        LOREM
                    </p>
                    <img className='Section-8-item-image' src={CaseLine} alt='Caseline'/>
                </li>
                <li className='Section-8-item'>
                    <h2 className='Section-8-item-header'>LOREM</h2>
                    <p 
                        className='Section-8-item-text'
                        onClick={() => handlePopupOpen(<OffshoreLCMContent />)}
                        style={{ cursor: 'pointer' }}
                    >
                        LOREM
                    </p>
                </li>
                {/* Add more items with different pop-ups here */}
            </ul>
            <Popup 
                isVisible={!!activePopup} 
                onClose={handlePopupClose} 
                content={activePopup} 
            />
        </div>
    );
}
