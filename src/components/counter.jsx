import React from 'react';
import '../styles/counter.css';

export function Counter( { numberClick } ) {
    return(
        <div className='counter'>
            {numberClick}
        </div>
    )
}