/* Universidad del Valle de Guatemala
// Autora: Andrea Maria Cordon Mayen
// Carne: 16076
// Fecha: 23/07/2018
// client.js */

// Constante que guarda los estados importantes a utilizar en el programa
const state = {
    graph: 0,
    size: 0,
    numbers: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 897, 1597]
};

// Funcion render
const render = numberState => {

    // Se verifica que nuestra root no tenga alun nodo ya creado
    if(root.hasChildNodes()){
        root.innerHTML = null;
    }

    // Divs de la barra principal (incluye input y boton)
    const upperBar = document.createElement('div');
    upperBar.className = 'upperBar';

    const numberInput = document.createElement('input');
    numberInput.className = 'numberInput';
    upperBar.appendChild(numberInput);

    const generateBtn = document.createElement('button');
    generateBtn.className = 'generateBtn';
    generateBtn.innerHTML = 'GENERAR';
    upperBar.appendChild(generateBtn);

    // Divs que contendra a los demas divs que se crearan con las graficas de Fibonacci
    const bodyBar = document.createElement('div');
    bodyBar.className = 'bodyBar';

    const graphsBar = document.createElement('div');
    graphsBar.className = 'graphsBar';
    bodyBar.appendChild(graphsBar);

    // Divs que contienen a las graficas en si (grafica y div con fecha)
    // Events
    generateBtn.onclick = () => {
        const now = new Date();
        const dateD = document.createElement('div');
        dateD.className = 'dateD';
        dateD.innerHTML = `Fecha: ${now}`;
        graphsBar.appendChild(dateD);

        // Creacion de las graficas
        const rGraph = document.createElement('div');
        rGraph.className = 'rGraph';
        graphsBar.appendChild(rGraph);
        const columnsQ = document.getElementsByClassName('numberInput')[0].value;
        state.size = columnsQ;
        for(let i = 0; i < columnsQ; i += 1) {
            heightT = state.numbers[i];
            // Segun mi logica, se crean divs pequenos que representen las columnas y las alturas varian dependiendo del numero ingresado
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = heightT;
            rGraph.appendChild(bar);
            console.log(heightT);
        }
    }

    // Main rendering
    root.appendChild(upperBar);
    root.appendChild(bodyBar);

}

// Se renderiza nuestro estado
render(state);