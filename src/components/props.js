// import { manageClick, restartCounter } from '../App.js';

export const button_click_object = {
    text: 'Click',
    is_button_click:true,
    manageClick:function() {
        console.table('Click');
    }
};

export const button_restart_object = {
    text: 'Restart',
    is_button_click:false,
    restartCounter:function() {
        console.table('From cero');
    }
};

