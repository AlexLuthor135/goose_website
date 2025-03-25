import React from 'react';
import '../css/Reserved.css'; // Import your CSS file
import reserved_logo from '../assets/logo_reserved.svg';
import { ReactSVG } from 'react-svg';


const Reserved = () => {
  return (
    <div className="Reserved">
      <ReactSVG src={reserved_logo} />
    </div>
  );
};

export default Reserved;
