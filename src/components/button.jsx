import React from 'react';
import '../styles/button.css';


export function Button({text, is_button_click, manageClick, restartCounter }) {
    
    

    return (
        <button 
        className={ is_button_click ? 'button_click' : 'button_restart' }
        onClick={is_button_click ? manageClick : restartCounter}>  
        {text}
        </button>
    );
}