window.addEventListener('DOMContentLoaded', () => {
    //tabs
    const tabs = require('./modules/tabs');
    const timer = require('./modules/timer');
    const modal = require('./modules/modal');
    const cards = require('./modules/cards');
    const forms = require('./modules/forms');
    const slider = require('./modules/slider');
    const calc = require('./modules/calc');
    tabs();
    timer();
    modal();
    cards();
    forms();
    slider();
    calc();

})