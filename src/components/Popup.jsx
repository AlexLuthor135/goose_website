// Popup.js
import React from 'react';
import '../css/Popup.css'; // Import CSS for the pop-up

const Popup = ({ isVisible, onClose, content}) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
      <button className="popup-close" onClick={onClose}>&times;</button>
      {content}
    </div>
    </div>
  );
};

export default Popup;
