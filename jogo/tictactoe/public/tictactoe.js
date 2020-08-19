export default function createGame () {
    var sequenciasGanhadoras = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function alternaJogador(elemento) {
    if (elemento === "") {
        return 'X';
    } else if (elemento === 'O') {
        return 'X';
    } else {
        return 'O';
    }
}

function verificaGanhador(elements, jogador) {
    var items = [];
    var empate = [];
    for (let i = 0; i < elements.length; i++) {
        items.push([elements[i].id, elements[i].value]);

    }
    for (let i = 0; i < elements.length; i++) {
        empate.push([elements[i].id, elements[i].innerHTML]);

    }
    for (let i = 0; i < sequenciasGanhadoras.length; i++) {
        if (items[sequenciasGanhadoras[i][0]][1] == jogador &&
            items[sequenciasGanhadoras[i][1]][1] == jogador &&
            items[sequenciasGanhadoras[i][2]][1] == jogador) {
            return jogador;

        }
    }

    if (empate[0][1] != "" && empate[1][1] != '' && empate[2][1] != '' && empate[3][1] != '' && empate[4][1] != ''
        && empate[5][1] != '' && empate[6][1] != '' && empate[7][1] != '' && empate[8][1] != '') {
        return "OX"

    }


    return false;
}

return {
    alternaJogador,
    verificaGanhador
}

}



