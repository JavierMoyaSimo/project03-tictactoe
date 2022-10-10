// Funcion al darle click al boton de enviar (Datos PLAYER 1)
FunctionSaveNameOne = () => {
    // Guardo el valor de checked del boton radio Human del player 1
    let radioHumanOneValue = document.getElementById("radioHuman1").checked;
    // Guardo el valor de checked del boton radio CPU del player 1
    let radioCpuOneValue = document.getElementById("radioCpu1").checked;
    // Guardo el valor del input player 1
    let buttonOne = document.getElementById("inputPlayerOne");
    let saveName = buttonOne.value;
    // Guardo el parrafo de arriba del input para posteriormente introducirle el nombre del Player 1.
    let namePlayerOne = document.getElementById("namePlayerOne");
    // Validacion de que todos los campos(input y radio(Human/CPU) esten rellenos)
    if ((radioHumanOneValue == true) && (saveName != "")) {
        // Guardo el valor del input 1 en localstorage
        localStorage.setItem("nameOfPlayerOne", saveName);
        // Guardo el valor del boton radioHuman1 en localstorage
        localStorage.setItem("valueOfHuman1", radioHumanOneValue);
        // Guardo el valor del boton radioCpu1 en localstorage
        localStorage.setItem("valueOfCpu1", radioCpuOneValue);
        // Introduzco en el parrafo el nombre del Player 1
        namePlayerOne.innerHTML = ` Player 1 : ${saveName}`;
        //Vacio el input player 1
        buttonOne.value = "";
    } else {
        alert("Please, write your name and select Human . This is not possible select CPU in player 1.")
    }
}

// Funcion al darle click al boton de enviar (Datos PLAYER 2)
FunctionSaveNameTwo = () => {
    // Guardo el valor de checked del boton radio Human del player 2
    let radioHumanTwoValue = document.getElementById("radioHuman2").checked;
    // Guardo el valor de checked del boton radio CPU del player 2
    let radioCpuTwoValue = document.getElementById("radioCpu2").checked;
    // Guardo el valor del input player 2
    let buttonTwo = document.getElementById("inputPlayerTwo");
    let saveNameTwo = buttonTwo.value;
    // Guardo el parrafo de arriba del input para posteriormente introducirle el nombre del Player 2.
    let namePlayerTwo = document.getElementById("namePlayerTwo");

    // Validacion de que todos los campos(input y radio(Human/CPU) esten rellenos)
    if ((radioHumanTwoValue == true || radioCpuTwoValue == true) && (saveNameTwo != "")) {
        // Guardo el valor del input 2 en localstorage
        localStorage.setItem("nameOfPlayerTwo", saveNameTwo);
        // Guardo el valor del boton radioHuman2 en localstorage
        localStorage.setItem("valueOfHuman2", radioHumanTwoValue);
        // Guardo el valor del boton radioCpu2 en localstorage
        localStorage.setItem("valueOfCpu2", radioCpuTwoValue);
        // Introduzco en el parrafo el nombre del Player 2
        namePlayerTwo.innerHTML = ` Player 2 : ${saveNameTwo}`;
        //Vacio el input player 2
        buttonTwo.value = "";
    } else {
        alert("Please, write your name and select if you are Human o CPU")
    }
}

// Funcion para cambiar a play.html(HTML donde esta el propio juego) desde players.html con el boton Start
ChangeWindow = () => {
    if ((document.getElementById("namePlayerOne").innerHTML != "Player 1") && (document.getElementById("namePlayerTwo").innerHTML != "Player 2")) {
        document.getElementById("startButton").href = "./play.html";
    } else {
        alert("Please fill in all the fields of the form")
    }
};

// INFORMATION PANEL (play.html)

//Recupero el nameOfPlayerOne del localStorage
let name1 = localStorage.getItem("nameOfPlayerOne");
// Recupero el nameOfPlayerTwo del localStorage
let name2 = localStorage.getItem("nameOfPlayerTwo");
// Recupero el tipo de jugador 1 (Human o CPU) y lo escribo en el Panel de Informacion
let typePlayer1 = localStorage.getItem("valueOfHuman1");

if (typePlayer1 == "true") {
    var nameType1 = "HUMAN"; // Usamos var para que el foco sea general; asi ya estara definida fuera del if.
    document.getElementById("nameP1").innerHTML = `Player 1:  ${name1} - ${nameType1} - X`;
}
//      else {
//     var nameType1 = "CPU";
//     document.getElementById("nameP1").innerHTML = `Player 1:  ${name1} - ${nameType1} - X`;
// }

// Recupero el tipo de jugador 2 (Human o CPU) y lo escribo en el Panel de Informacion
let typePlayer2 = localStorage.getItem("valueOfHuman2");

if (typePlayer2 == "true") {
    var nameType2 = "HUMAN";
    document.getElementById("nameP2").innerHTML = `Player 2:  ${name2} - ${nameType2} - O`;
} else {
    var nameType2 = "CPU";
    document.getElementById("nameP2").innerHTML = `Player 2:  ${name2} - ${nameType2} - O`;
};

// CREAMOS ARRAY QUE CONTIENE LA TABLA DEL JUEGO y los 3 distintos SUBARRAYS POR CADA FILA DEL TABLERO
var arrayTicTacToe = new Array(3);
//En cada posición de arrayTicTacToe guardamos un nuevo array
arrayTicTacToe[0] = new Array(3);
arrayTicTacToe[1] = new Array(3);
arrayTicTacToe[2] = new Array(3);
//Metemos un dato en cada posición
arrayTicTacToe[0][0] = "";
arrayTicTacToe[0][1] = "";
arrayTicTacToe[0][2] = "";
arrayTicTacToe[1][0] = "";
arrayTicTacToe[1][1] = "";
arrayTicTacToe[1][2] = "";
arrayTicTacToe[2][0] = "";
arrayTicTacToe[2][1] = "";
arrayTicTacToe[2][2] = "";



// OBETOS JUGADOR 1- JUGADOR 2
// Creamos  CLASE Player
class Player {
    constructor(name, turn, type, symbol) {
        this.name = name;
        this.turn = turn;
        this.type = type;
        this.symbol = symbol;
    };
}
//INSTANCIAMOS 2 Jugadores
let player1 = new Player(name1, 0, nameType1, "X");
let player2 = new Player(name2, 0, nameType2, "Y");

// Declaro el turno del jugador que comienza el juego. 

let turnoAleatorio = Math.floor(Math.random() * 99);
let myTurn = true;

if (turnoAleatorio % 2 == 0) {
    myTurn = true;
    document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
} else {
    myTurn = false;
    document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
}

// let prueba = document.getElementsByClassName("youAreTheWinner");
// let valorPueba = prueba.value;
// console.log(valorPueba);


// Funcion para comprobar si hay un ganador. Primero compruebo opciones player 1. || Después opciones player 2.
const Winner = () => {

    if ((casillas[0].innerHTML == "X") && (casillas[1].innerHTML == "X") && (casillas[2].innerHTML == "X") ||
        (casillas[3].innerHTML == "X") && (casillas[4].innerHTML == "X") && (casillas[5].innerHTML == "X") ||
        (casillas[6].innerHTML == "X") && (casillas[7].innerHTML == "X") && (casillas[8].innerHTML == "X") ||
        (casillas[0].innerHTML == "X") && (casillas[3].innerHTML == "X") && (casillas[6].innerHTML == "X") ||
        (casillas[1].innerHTML == "X") && (casillas[4].innerHTML == "X") && (casillas[7].innerHTML == "X") ||
        (casillas[2].innerHTML == "X") && (casillas[5].innerHTML == "X") && (casillas[8].innerHTML == "X") ||
        (casillas[0].innerHTML == "X") && (casillas[4].innerHTML == "X") && (casillas[8].innerHTML == "X") ||
        (casillas[2].innerHTML == "X") && (casillas[4].innerHTML == "X") && (casillas[6].innerHTML == "X")) {
        console.log("HAS GANADO JUGADR 1")
        setTimeout(function () { location.href = "winner.html"; }, 500);;
    } else if ((casillas[0].innerHTML == "O") && (casillas[1].innerHTML == "O") && (casillas[2].innerHTML == "O") ||
        (casillas[3].innerHTML == "O") && (casillas[4].innerHTML == "O") && (casillas[5].innerHTML == "O") ||
        (casillas[6].innerHTML == "O") && (casillas[7].innerHTML == "O") && (casillas[8].innerHTML == "O") ||
        (casillas[0].innerHTML == "O") && (casillas[3].innerHTML == "O") && (casillas[6].innerHTML == "O") ||
        (casillas[1].innerHTML == "O") && (casillas[4].innerHTML == "O") && (casillas[7].innerHTML == "O") ||
        (casillas[2].innerHTML == "O") && (casillas[5].innerHTML == "O") && (casillas[8].innerHTML == "O") ||
        (casillas[0].innerHTML == "O") && (casillas[4].innerHTML == "O") && (casillas[8].innerHTML == "O") ||
        (casillas[2].innerHTML == "O") && (casillas[4].innerHTML == "O") && (casillas[6].innerHTML == "O")) {
        console.log("HAS GANADO jugadorrr 2")
        setTimeout(function () { location.href = "winner.html"; }, 500);;
    }
}
// if (arrayTicTacToe[0][0] == 'X' && arrayTicTacToe[0][1] == 'X' && arrayTicTacToe[0][2] == 'X' || arrayTicTacToe[1][0] == 'X' && arrayTicTacToe[1][1] == 'X' && arrayTicTacToe[1][2] == 'X' ||
//     arrayTicTacToe[2][0] == 'X' && arrayTicTacToe[2][1] == 'X' && arrayTicTacToe[2][2] == 'X' || arrayTicTacToe[0][0] == 'X' && arrayTicTacToe[1][0] == 'X' && arrayTicTacToe[2][0] == 'X' ||
//     arrayTicTacToe[0][1] == 'X' && arrayTicTacToe[1][1] == 'X' && arrayTicTacToe[2][1] == 'X' || arrayTicTacToe[0][2] == 'X' && arrayTicTacToe[1][2] == 'X' && arrayTicTacToe[2][2] == 'X' ||
//     arrayTicTacToe[0][0] == 'X' && arrayTicTacToe[1][1] == 'X' && arrayTicTacToe[2][2] == 'X' || arrayTicTacToe[0][2] == 'X' && arrayTicTacToe[1][1] == 'X' && arrayTicTacToe[2][0] == 'X') {
//     setTimeout(function () { location.href = "winner.html"; }, 500);
// }

// if (arrayTicTacToe[0][0] == 'O' && arrayTicTacToe[0][1] == 'O' && arrayTicTacToe[0][2] == 'O' || arrayTicTacToe[1][0] == 'O' && arrayTicTacToe[1][1] == 'O' && arrayTicTacToe[1][2] == 'O' ||
//     arrayTicTacToe[2][0] == 'O' && arrayTicTacToe[2][1] == 'O' && arrayTicTacToe[2][2] == 'O' || arrayTicTacToe[0][0] == 'O' && arrayTicTacToe[1][0] == 'O' && arrayTicTacToe[2][0] == 'O' ||
//     arrayTicTacToe[0][1] == 'O' && arrayTicTacToe[1][1] == 'O' && arrayTicTacToe[2][1] == 'O' || arrayTicTacToe[0][2] == 'O' && arrayTicTacToe[1][2] == 'O' && arrayTicTacToe[2][2] == 'O' ||
//     arrayTicTacToe[0][0] == 'O' && arrayTicTacToe[1][1] == 'O' && arrayTicTacToe[2][2] == 'O' || arrayTicTacToe[0][2] == 'O' && arrayTicTacToe[1][1] == 'O' && arrayTicTacToe[2][0] == 'O') {
//     setTimeout(function () { location.href = "winner.html"; }, 500);
// }

// Funcion comprobar si hay un winner:
// const Winner = () => {

//     switch (arrayTicTacToe) {
//         case ((arrayTicTacToe[0][0] == "X") && (arrayTicTacToe[0][1] == "X") && (arrayTicTacToe[0][2] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: FILA 1");
//             break;
//         case ((arrayTicTacToe[1][0] == "X") && (arrayTicTacToe[1][1] == "X") && (arrayTicTacToe[1][2] == "X")):
//             console.log("HAS GANADO JUGADOR 1 . COMBINACION: FILA 2");
//             break;
//         case ((arrayTicTacToe[2][0] == "X") && (arrayTicTacToe[2][1] == "X") && (arrayTicTacToe[2][2] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: FILA 3");
//             break;
//         case ((arrayTicTacToe[0][0] == "X") && (arrayTicTacToe[1][0] == "X") && (arrayTicTacToe[2][0] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: COLUMNA 1");
//             break;
//         case ((arrayTicTacToe[0][1] == "X") && (arrayTicTacToe[1][1] == "X") && (arrayTicTacToe[2][1] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: COLUMNA 2");
//             break;
//         case ((arrayTicTacToe[0][2] == "X") && (arrayTicTacToe[1][2] == "X") && (arrayTicTacToe[2][2] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: COLUMNA 3");
//             break;
//         case ((arrayTicTacToe[0][0] == "X") && (arrayTicTacToe[1][1] == "X") && (arrayTicTacToe[2][2] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: DIAGONAL 1");
//             break;
//         case ((arrayTicTacToe[2][0] == "X") && (arrayTicTacToe[1][1] == "X") && (arrayTicTacToe[0][2] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: DIAGONAL 2");
//             break;
//         case ((arrayTicTacToe[0][0] == "O") && (arrayTicTacToe[0][1] == "O") && (arrayTicTacToe[0][2] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: FILA 1");
//             break;
//         case ((arrayTicTacToe[1][0] == "O") && (arrayTicTacToe[1][1] == "O") && (arrayTicTacToe[1][2] == "O")):
//             console.log("HAS GANADO JUGADOR 2 . COMBINACION: FILA 2");
//             break;
//         case ((arrayTicTacToe[2][0] == "O") && (arrayTicTacToe[2][1] == "O") && (arrayTicTacToe[2][2] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: FILA 3");
//             break;

//         case ((arrayTicTacToe[0][0] == "O") && (arrayTicTacToe[1][0] == "O") && (arrayTicTacToe[2][0] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: COLUMNA 1");
//             break;
//         case ((arrayTicTacToe[0][1] == "O") && (arrayTicTacToe[1][1] == "O") && (arrayTicTacToe[2][1] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: COLUMNA 2");
//             break;
//         case ((arrayTicTacToe[0][2] == "O") && (arrayTicTacToe[1][2] == "O") && (arrayTicTacToe[2][2] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: COLUMNA 3");
//             break;
//         case ((arrayTicTacToe[0][0] == "O") && (arrayTicTacToe[1][1] == "O") && (arrayTicTacToe[2][2] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: DIAGONAL 1");
//             break;
//         case ((arrayTicTacToe[2][0] == "O") && (arrayTicTacToe[1][1] == "O") && (arrayTicTacToe[0][2] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: DIAGONAL 2");
//             break;
//         default:
//             console.log("DEFAULT DEL SWITCH");
//             break;

//     }
// }


//Funcion comprobar fila

// const ComprobarFila = () =>{
//     for (let i = 0; i < arrayTicTacToe.length; i++) {
//         if (((arrayTicTacToe[i][0] === arrayTicTacToe[i][1]) && (arrayTicTacToe[i][1] === arrayTicTacToe[i][2])) && 
//         (arrayTicTacToe[i][0] !== "") && (arrayTicTacToe[i][1] !== "")(arrayTicTacToe[i][2] !== "")) {
//             console.log("De puta mare");
//         }
//     }
// }


// FUNCION QUE PINTA "X" o "O" en funcion del jugador que sea.
// Falta cambiar la funcion del winner y contemplar el caso en que sea CPU el player2.
//Capturamos en un array todos los elementos.
let casillasObject = document.getElementsByClassName("letter"); // SECUESTRA un ARRAY entero con 9 posiciones ( 9 elementos que tienen la misma clase);

let casillas = Array.from(casillasObject);

// Hemos usado map porque nos permite tratar a cada elemento del array como un objeto(Propiedades + metodos).
// JUEGO TICTACTOE. Para cada casilla del tablero que sea pulsada, y dependiendo de las condiciones, ocurrirá:
casillas.map((casilla) => {
    casilla.addEventListener("click", () => {
        if ((casilla.innerHTML == "") && (player1.turn < 3) && (myTurn == true)) {//Casilla vacia/ tenga las 3 fichas/ turno jugador 1.
            casilla.innerHTML = "X";
            Winner();
            player1.turn++
            myTurn = !myTurn;
            document.getElementById("turnOf").innerHTML = (myTurn) ? document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}` : `Turn of  ${player2.name}`;

        } else if ((player1.turn >= 3) && (casilla.innerHTML == "X") && (myTurn == true)) {// Casilla ocupada/ tiene 0 fichas/ turno jugadoor 1.
            casilla.innerHTML = "";
            Winner();
            player1.turn--;
        }
        else if ((casilla.innerHTML == "") && (player2.turn < 3) && (myTurn == false)) {//Casilla vacia/ tenga las 3 fichas/ turno jugador 2.
            casilla.innerHTML = "O";
            Winner();
            player2.turn++
            myTurn = !myTurn;
            document.getElementById("turnOf").innerHTML = (myTurn) ? document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}` : `Turn of  ${player2.name}`
        }
        else if ((player2.turn >= 3) && (casilla.innerHTML == "O") && (myTurn == false)) {// Casilla ocupada/ tiene 0 fichas/ turno jugador 2.
            casilla.innerHTML = "";
            Winner();
            player2.turn--;
        }

    })

});





// // Funcion llamada al pulsar row1-col1
// TopLeftPush = () => {
//     if (myTurn == true) {   // LE TOCARIA AL JUGADOR 1

//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player1.turn < 3) && (arrayTicTacToe[0][0] == "")) {
//             arrayTicTacToe[0][0] = "X";
//             document.getElementById("r1-c1").innerHTML = "X";
//             console.log(arrayTicTacToe);
//             // ComprobarFila();
//             Winner();
//             player1.turn++;
//             myTurn = false;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
//         } else if ((player1.turn >= 3) && (arrayTicTacToe[0][0] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
//             document.getElementById("r1-c1").innerHTML = "";
//             arrayTicTacToe[0][0] = "";
//             console.log(arrayTicTacToe);
//             // ComprobarFila();
//             Winner();
//             player1.turn--;

//         }

//     } else {                   //LE TOCARIA AL JUGADOR 2
//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player2.turn < 3) && (arrayTicTacToe[0][0] == "")) {
//             arrayTicTacToe[0][0] = "O"
//             document.getElementById("r1-c1").innerHTML = "O";
//             console.log(arrayTicTacToe);
//             // ComprobarFila();
//             Winner();
//             player2.turn++
//             myTurn = true;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
//         } else if ((player2.turn >= 3) && (arrayTicTacToe[0][0] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
//             document.getElementById("r1-c1").innerHTML = "";
//             arrayTicTacToe[0][0] = "";
//             console.log(arrayTicTacToe);
//             // ComprobarFila();
//             Winner();
//             player2.turn--;
//         }
//     }
// };


// // Funcion llamada al pulsar row1-col2
// TopCenterPush = () => {
//     if (myTurn == true) {   // LE TOCARIA AL JUGADOR 1

//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player1.turn < 3) && (arrayTicTacToe[0][1] == "")) {
//             arrayTicTacToe[0][1] = "X";
//             document.getElementById("r1-c2").innerHTML = "X";
//             console.log(arrayTicTacToe);
//             Winner();
//             player1.turn++;
//             myTurn = false;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
//         } else if ((player1.turn >= 3) && (arrayTicTacToe[0][1] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
//             document.getElementById("r1-c2").innerHTML = "";
//             arrayTicTacToe[0][1] = "";
//             console.log(arrayTicTacToe);
//             Winner();
//             player1.turn--;

//         }

//     } else {                   //LE TOCARIA AL JUGADOR 2
//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player2.turn < 3) && (arrayTicTacToe[0][1] == "")) {
//             arrayTicTacToe[0][1] = "O"
//             document.getElementById("r1-c2").innerHTML = "O";
//             console.log(arrayTicTacToe);
//             Winner();
//             player2.turn++
//             myTurn = true;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
//         } else if ((player2.turn >= 3) && (arrayTicTacToe[0][1] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
//             document.getElementById("r1-c2").innerHTML = "";
//             arrayTicTacToe[0][1] = "";
//             console.log(arrayTicTacToe);
//             Winner();
//             player2.turn--;
//         }
//     }
// }

// // Funcion llamada al pulsar row1-col3
// TopRightPush = () => {
//     if (myTurn == true) {   // LE TOCARIA AL JUGADOR 1

//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player1.turn < 3) && (arrayTicTacToe[0][2] == "")) {
//             arrayTicTacToe[0][2] = "X";
//             document.getElementById("r1-c3").innerHTML = "X";
//             console.log(arrayTicTacToe);
//             Winner();
//             player1.turn++;
//             myTurn = false;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
//         } else if ((player1.turn >= 3) && (arrayTicTacToe[0][2] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
//             document.getElementById("r1-c3").innerHTML = "";
//             arrayTicTacToe[0][2] = "";
//             console.log(arrayTicTacToe);
//             Winner();
//             player1.turn--;
//         }

//     } else {                   //LE TOCARIA AL JUGADOR 2
//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player2.turn < 3) && (arrayTicTacToe[0][2] == "")) {
//             arrayTicTacToe[0][2] = "O"
//             document.getElementById("r1-c3").innerHTML = "O";
//             console.log(arrayTicTacToe);
//             Winner();
//             player2.turn++
//             myTurn = true;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
//         } else if ((player2.turn >= 3) && (arrayTicTacToe[0][2] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
//             document.getElementById("r1-c3").innerHTML = "";
//             arrayTicTacToe[0][2] = "";
//             console.log(arrayTicTacToe);
//             Winner();
//             player2.turn--;
//         }
//     }
// }

// // Funcion llamada al pulsar row2-col1
// CenterLeftPush = () => {
//     if (myTurn == true) {   // LE TOCARIA AL JUGADOR 1

//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player1.turn < 3) && (arrayTicTacToe[1][0] == "")) {
//             arrayTicTacToe[1][0] = "X";
//             document.getElementById("r2-c1").innerHTML = "X";
//             Winner();
//             player1.turn++;
//             myTurn = false;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
//         } else if ((player1.turn >= 3) && (arrayTicTacToe[1][0] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
//             document.getElementById("r2-c1").innerHTML = "";
//             arrayTicTacToe[1][0] = "";
//             Winner();
//             player1.turn--;
//         }

//     } else {                   //LE TOCARIA AL JUGADOR 2
//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player2.turn < 3) && (arrayTicTacToe[1][0] == "")) {
//             arrayTicTacToe[1][0] = "O"
//             document.getElementById("r2-c1").innerHTML = "O";
//             Winner();
//             player2.turn++
//             myTurn = true;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
//         } else if ((player2.turn >= 3) && (arrayTicTacToe[1][0] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
//             document.getElementById("r2-c1").innerHTML = "";
//             arrayTicTacToe[1][0] = "";
//             Winner();
//             player2.turn--;
//         }
//     }
// }


// // Funcion llamada al pulsar row2-col2
// CenterCenterPush = () => {
//     if (myTurn == true) {   // LE TOCARIA AL JUGADOR 1

//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player1.turn < 3) && (arrayTicTacToe[1][1] == "")) {
//             arrayTicTacToe[1][1] = "X";
//             document.getElementById("r2-c2").innerHTML = "X";
//             Winner();
//             player1.turn++;
//             myTurn = false;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
//         } else if ((player1.turn >= 3) && (arrayTicTacToe[1][1] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
//             document.getElementById("r2-c2").innerHTML = "";
//             arrayTicTacToe[1][1] = "";
//             Winner();
//             player1.turn--;
//         }

//     } else {                   //LE TOCARIA AL JUGADOR 2
//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player2.turn < 3) && (arrayTicTacToe[1][1] == "")) {
//             arrayTicTacToe[1][1] = "O"
//             document.getElementById("r2-c2").innerHTML = "O";
//             Winner();
//             player2.turn++
//             myTurn = true;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
//         } else if ((player2.turn >= 3) && (arrayTicTacToe[1][1] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
//             document.getElementById("r2-c2").innerHTML = "";
//             arrayTicTacToe[1][1] = "";
//             Winner();
//             player2.turn--;
//         }
//     }
// }

// // Funcion llamada al pulsar row2-col3
// CenterRightPush = () => {
//     if (myTurn == true) {   // LE TOCARIA AL JUGADOR 1

//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player1.turn < 3) && (arrayTicTacToe[1][2] == "")) {
//             arrayTicTacToe[1][2] = "X";
//             document.getElementById("r2-c3").innerHTML = "X";
//             Winner();
//             player1.turn++;
//             myTurn = false;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
//         } else if ((player1.turn >= 3) && (arrayTicTacToe[1][2] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
//             document.getElementById("r2-c3").innerHTML = "";
//             arrayTicTacToe[1][2] = "";
//             Winner();
//             player1.turn--;
//         }

//     } else {                   //LE TOCARIA AL JUGADOR 2
//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player2.turn < 3) && (arrayTicTacToe[1][2] == "")) {
//             arrayTicTacToe[1][2] = "O"
//             document.getElementById("r2-c3").innerHTML = "O";
//             Winner();
//             player2.turn++
//             myTurn = true;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
//         } else if ((player2.turn >= 3) && (arrayTicTacToe[1][2] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
//             document.getElementById("r2-c3").innerHTML = "";
//             arrayTicTacToe[1][2] = "";
//             Winner();
//             player2.turn--;
//         }
//     }
// }

// // Funcion llamada al pulsar row3-col1
// BottomLeftPush = () => {
//     if (myTurn == true) {   // LE TOCARIA AL JUGADOR 1

//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player1.turn < 3) && (arrayTicTacToe[2][0] == "")) {
//             arrayTicTacToe[2][0] = "X";
//             document.getElementById("r3-c1").innerHTML = "X";
//             Winner();
//             player1.turn++;
//             myTurn = false;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
//         } else if ((player1.turn >= 3) && (arrayTicTacToe[2][0] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
//             document.getElementById("r3-c1").innerHTML = "";
//             arrayTicTacToe[2][0] = "";
//             Winner();
//             player1.turn--;
//         }

//     } else {                   //LE TOCARIA AL JUGADOR 2
//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player2.turn < 3) && (arrayTicTacToe[2][0] == "")) {
//             arrayTicTacToe[2][0] = "O"
//             document.getElementById("r3-c1").innerHTML = "O";
//             Winner();
//             player2.turn++
//             myTurn = true;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
//         } else if ((player2.turn >= 3) && (arrayTicTacToe[2][0] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
//             document.getElementById("r3-c1").innerHTML = "";
//             arrayTicTacToe[2][0] = "";
//             Winner();
//             player2.turn--;
//         }
//     }
// }

// // Funcion llamada al pulsar row3-col2
// BottomCenterPush = () => {
//     if (myTurn == true) {   // LE TOCARIA AL JUGADOR 1

//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player1.turn < 3) && (arrayTicTacToe[2][1] == "")) {
//             arrayTicTacToe[2][1] = "X";
//             document.getElementById("r3-c2").innerHTML = "X";
//             Winner();
//             player1.turn++;
//             myTurn = false;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
//         } else if ((player1.turn >= 3) && (arrayTicTacToe[2][1] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
//             document.getElementById("r3-c2").innerHTML = "";
//             arrayTicTacToe[2][1] = "";
//             Winner();
//             player1.turn--;
//         }

//     } else {                   //LE TOCARIA AL JUGADOR 2
//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player2.turn < 3) && (arrayTicTacToe[2][1] == "")) {
//             arrayTicTacToe[2][1] = "O"
//             document.getElementById("r3-c2").innerHTML = "O";
//             Winner();
//             player2.turn++
//             myTurn = true;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
//         } else if ((player2.turn >= 3) && (arrayTicTacToe[2][1] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
//             document.getElementById("r3-c2").innerHTML = "";
//             arrayTicTacToe[2][1] = "";
//             Winner();
//             player2.turn--;
//         }
//     }
// }

// // Funcion llamada al pulsar row3-col1
// BottomRightPush = () => {
//     if (myTurn == true) {   // LE TOCARIA AL JUGADOR 1

//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player1.turn < 3) && (arrayTicTacToe[2][2] == "")) {
//             arrayTicTacToe[2][2] = "X";
//             document.getElementById("r3-c3").innerHTML = "X";
//             Winner();
//             player1.turn++;
//             myTurn = false;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
//         } else if ((player1.turn >= 3) && (arrayTicTacToe[2][2] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
//             document.getElementById("r3-c3").innerHTML = "";
//             arrayTicTacToe[2][2] = "";
//             Winner();
//             player1.turn--;
//         }

//     } else {                   //LE TOCARIA AL JUGADOR 2
//         //Si aun no ha realizado 3 turnos y la casilla esta vacia:
//         if ((player2.turn < 3) && (arrayTicTacToe[2][2] == "")) {
//             arrayTicTacToe[2][2] = "O"
//             document.getElementById("r3-c3").innerHTML = "O";
//             Winner();
//             player2.turn++
//             myTurn = true;
//             document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
//         } else if ((player2.turn >= 3) && (arrayTicTacToe[2][2] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
//             document.getElementById("r3-c3").innerHTML = "";
//             arrayTicTacToe[2][2] = "";
//             Winner();
//             player2.turn--;
//         }
//     }
// }


//  const Winner = () => {
//     switch (arrayTicTacToe) {
//         case ((arrayTicTacToe[0][0] == "X") && (arrayTicTacToe[0][1] == "X") && (arrayTicTacToe[0][2] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: FILA 1");
//             break;
//         case ((arrayTicTacToe[1][0] == "X") && (arrayTicTacToe[1][1] == "X") && (arrayTicTacToe[1][2] == "X")):
//             console.log("HAS GANADO JUGADOR 1 . COMBINACION: FILA 2");
//             break;
//         case ((arrayTicTacToe[2][0] == "X") && (arrayTicTacToe[2][1] == "X") && (arrayTicTacToe[2][2] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: FILA 3");
//             break;
//         case ((arrayTicTacToe[0][0] == "X") && (arrayTicTacToe[1][0] == "X") && (arrayTicTacToe[2][0] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: COLUMNA 1");
//             break;
//         case ((arrayTicTacToe[0][1] == "X") && (arrayTicTacToe[1][1] == "X") && (arrayTicTacToe[2][1] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: COLUMNA 2");
//             break;
//         case ((arrayTicTacToe[0][2] == "X") && (arrayTicTacToe[1][2] == "X") && (arrayTicTacToe[2][2] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: COLUMNA 3");
//             break;
//         case ((arrayTicTacToe[0][0] == "X") && (arrayTicTacToe[1][1] == "X") && (arrayTicTacToe[2][2] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: DIAGONAL 1");
//             break;
//         case ((arrayTicTacToe[2][0] == "X") && (arrayTicTacToe[1][1] == "X") && (arrayTicTacToe[0][2] == "X")):
//             console.log("HAS GANADO JUGADOR 1. COMBINACION: DIAGONAL 2");
//             break;
//         case ((arrayTicTacToe[0][0] == "O") && (arrayTicTacToe[0][1] == "O") && (arrayTicTacToe[0][2] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: FILA 1");
//             break;
//         case ((arrayTicTacToe[1][0] == "O") && (arrayTicTacToe[1][1] == "O") && (arrayTicTacToe[1][2] == "O")):
//             console.log("HAS GANADO JUGADOR 2 . COMBINACION: FILA 2");
//             break;
//         case ((arrayTicTacToe[2][0] == "O") && (arrayTicTacToe[2][1] == "O") && (arrayTicTacToe[2][2] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: FILA 3");
//             break;

//         case ((arrayTicTacToe[0][0] == "O") && (arrayTicTacToe[1][0] == "O") && (arrayTicTacToe[2][0] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: COLUMNA 1");
//             break;
//         case ((arrayTicTacToe[0][1] == "O") && (arrayTicTacToe[1][1] == "O") && (arrayTicTacToe[2][1] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: COLUMNA 2");
//             break;
//         case ((arrayTicTacToe[0][2] == "O") && (arrayTicTacToe[1][2] == "O") && (arrayTicTacToe[2][2] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: COLUMNA 3");
//             break;
//         case ((arrayTicTacToe[0][0] == "O") && (arrayTicTacToe[1][1] == "O") && (arrayTicTacToe[2][2] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: DIAGONAL 1");
//             break;
//         case ((arrayTicTacToe[2][0] == "O") && (arrayTicTacToe[1][1] == "O") && (arrayTicTacToe[0][2] == "O")):
//             console.log("HAS GANADO JUGADOR 2. COMBINACION: DIAGONAL 2");
//             break;
//         default:
//             break;

//     }
// }
