import React from 'react';


export function Button({text, is_button_click, manageClick }) {
    return (
        <button 
        className={ is_button_click ? 'button_click' : 'button_restart' }
        onClick={manageClick}>  
        {text}
        </button>
    );
}