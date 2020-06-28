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
    for (i = 0; i < elements.length; i++) {
        items.push([elements[i].id, elements[i].value]);

    }
    for (i = 0; i < elements.length; i++) {
        empate.push([elements[i].id, elements[i].innerHTML]);

    }
    for (i = 0; i < sequenciasGanhadoras.length; i++) {
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

var element = [];
var jogador = '';
var posicoes = document.querySelectorAll(".item");
var divJogo = document.getElementById("tictactoe");

if(!localStorage.getItem('X') || !localStorage.getItem('O')){
    localStorage.setItem('X', 0);
    localStorage.setItem('O', 0);
}

document.getElementById("X").innerHTML = localStorage.getItem('X');
document.getElementById("O").innerHTML = localStorage.getItem('O');

for (i = 0; i < posicoes.length; i++) {
    element.push(document.getElementById(posicoes[i].id));
    element[i].addEventListener("click", function (items) {

        if (items.toElement.innerHTML === "") {
            if (items.toElement.outerHTML != '<img class="img" src="x.jpg">' ||
            items.toElement.outerHTML != '<img class="img" src="x.jpg">') {
                jogador = alternaJogador(jogador);

                if (jogador == "X") {
                    items.srcElement.innerHTML = '<img class="img" src="x.jpg"></img>';
                    items.srcElement.value = jogador;
                } else {
                    items.srcElement.innerHTML = '<img class="img" src="circle.png"></img>';
                    items.srcElement.value = jogador;
                }
                var ganhador = verificaGanhador(element, jogador);
                // console.log(ganhador);
                if (ganhador) {
                    if (ganhador == 'X') {
                        divJogo.innerHTML = '<div class="ganhador"><img class="img" src="x.jpg"></img></div>' + " <h2>Vencedor</h2>";
                    } else if (ganhador == 'OX') {
                        divJogo.innerHTML = '<div class="empate"><img class="img2" src="circle.png"></img><img class="img1" src="x.jpg"></img></div>' + " <h2>Empate</h2>";

                    } else {
                        divJogo.innerHTML = '<div class="ganhador"><img class="img" src="circle.png"></img></div>' + " <h2>Vencedor</h2>";
                    }
                    var qtdVitorias = parseInt(localStorage.getItem(ganhador)) == "" ? 0 : parseInt(localStorage.getItem(ganhador));
                    localStorage.setItem(ganhador, qtdVitorias + 1);
                    document.getElementById("X").innerHTML = localStorage.getItem('X');
                    document.getElementById("O").innerHTML = localStorage.getItem('O');


                    var button = document.createElement("button");
                    button.innerHTML = "Reiniciar";
                    divJogo.className = "grid center";
                    button.className = "btnReiniciar";
                    divJogo.appendChild(button);
                    document.querySelector(".btnReiniciar").addEventListener("click", function (items) {
                        location.reload();
                    }, false);
                }
            }
        }
    }, false);
}






