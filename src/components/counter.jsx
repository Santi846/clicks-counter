import React from 'react';
import '../styles/counter.css';

export class Counter extends React.Component {
    render(){
        return(
            <div className='counter'>
                {this.props.numberClick}
            </div>
        )
    }
}

// export function Counter( { numberClick } ) {
//     return(
//         <div className='counter'>
//             {numberClick}
//         </div>
//     )
// }