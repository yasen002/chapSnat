import generate from "./generate"
import './style/style.scss'
import ed_x from "./asset/ed_sher_x.jpg"

var _ = require('lodash');




document.body.appendChild(component());
console.log(generate())


function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = ed_x;

    element.appendChild(myIcon);

    return element;
}