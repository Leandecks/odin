import * as _ from "lodash";
import { hello } from "./hello";
import "../sass/style.sass";
import "../assets/img/background.jpg";


function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join([hello(), 'Webpack!'], ' ');

    return element;
}

document.body.appendChild(component());
