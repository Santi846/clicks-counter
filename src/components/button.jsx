import React from 'react';
import '../styles/button.css';

export class Button extends React.Component {
    render(){
        return (
            <button 
            className={ this.props.is_button_click ? 'button_click' : 'button_restart' }
            onClick={this.props.is_button_click ? this.props.manageClick : this.props.restartCounter}>  
            {this.props.text}
            </button>
        );  
    }
}

// export function Button({text, is_button_click, manageClick, restartCounter }) {

//     return (
//         <button 
//         className={ is_button_click ? 'button_click' : 'button_restart' }
//         onClick={is_button_click ? manageClick : restartCounter}>  
//         {text}
//         </button>
//     );
// }