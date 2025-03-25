import React from 'react';
import '../css/Button.css';

export default function Button({ text, scrollToId, scrollTo, className }) {
  return (
    <button onClick={() => scrollTo(scrollToId)} className={className}>
      <span className='ButtonText'>
        {text}
      </span>
    </button>
  );
}
