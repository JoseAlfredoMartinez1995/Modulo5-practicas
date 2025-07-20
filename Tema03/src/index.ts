import * as _ from 'lodash';
/*import './estilo.css';
import imagen from './astronauta.png';
import datos from './datos.csv';

import ayaml from './datosy.yaml';
import ajson5 from './datosj.json5';

import './estilo.scss';*/

function Componente()
{
    const elemento = document.createElement('div');

    //lodash
    elemento.innerHTML = _.join(['HOLA', 'Webpack'], ' ');
    return elemento;
}

document.body.appendChild(Componente());