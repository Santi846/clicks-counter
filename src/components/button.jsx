import React from 'react';
import '../styles/button.css';


export function Button({text, is_button_click, manageClick, restartCounter }) {
    return (
        <button 
        className={ is_button_click ? 'button_click' : 'button_restart' }
        // TODO: Try this -> 'return a Promise from the event listener, and resolve when you have the response (or reject it in case of an error).' for taking out the async uncaught error for waiting for onclick event
        onClick={is_button_click ? manageClick : restartCounter}>  
        {text}
        </button>
    );
}