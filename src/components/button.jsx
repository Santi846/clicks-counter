import React from 'react';


export function Button({button_object, button_click, input }) {
    return (
        <button 
        className={ button_click ? 'button_click' : 'button_restart' }
        onClick={input}
        >
        </button>
    );
}