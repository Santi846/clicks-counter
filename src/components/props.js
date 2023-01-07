import { manageClick, restartCounter } from '../App.js';

export const button_click_object = {
    text: 'Click',
    is_button_click:true,
    manageClick:{manageClick}
};
export const button_restart_object = {
    text: 'Restart',
    is_button_click:false,
    manageClick:{restartCounter}
};