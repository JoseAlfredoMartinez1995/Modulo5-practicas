import _ from 'lodash';

function Componente()
{
    const elemento = document.createElement('div');

    //lodash
    elemento.innerHTML = _.join(['Hola', 'Webpack!'], ' ');

    return elemento;
}

document.body.appendChild(Componente());