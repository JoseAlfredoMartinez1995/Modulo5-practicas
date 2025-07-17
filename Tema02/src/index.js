import _ from 'lodash';
import './estilo.css';
import imagen from './astronauta.png';
import datos from './datos.csv';

import ayaml from './datosy.yaml';
import ajson5 from './datosj.json5';

function Componente()
{
    const elemento = document.createElement('div');

    //lodash
    elemento.innerHTML = _.join(['HOLA', 'Webpack'], ' ');
    elemento.classList.add('hola');
    
    const miImagen = new Image();
    miImagen.src = imagen;
    elemento.appendChild(miImagen);

    console.log(datos);

    console.log(ayaml.company);

    console.log(ajson5.nombre);

    return elemento;
}

document.body.appendChild(Componente());