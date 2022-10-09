
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
    if ((radioHumanOneValue == true || radioCpuOneValue == true) && (saveName != "")) {
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
        alert("Please, write your name and select if you are Human o CPU")
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

// Funcion para cambiar a play.html(HTML donde esta el propio juego) con el boton Start
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
    document.getElementById("nameP1").innerHTML = `Player 1:  ${name1} - HUMAN`;
} else {
    document.getElementById("nameP1").innerHTML = `Player 1:  ${name1} - CPU`;
}

// Recupero el tipo de jugador 2 (Human o CPU) y lo escribo en el Panel de Informacion


let typePlayer2 = localStorage.getItem("valueOfHuman2");

if (typePlayer2 == "true") {
    document.getElementById("nameP2").innerHTML = `Player 2:  ${name2} - HUMAN`;
} else {
    document.getElementById("nameP2").innerHTML = `Player 2:  ${name2} - CPU`;
}




// CREAMOS ARRAY QUE CONTIENE LA TABLA DEL JUEGO y los 3 distintos SUBARRAYS POR CADA FILA DEL TABLERO

let arrayTicTacToe = new Array(3);
//En cada posición de nuevoArray guardamos un nuevo array
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
    constructor(name, turn, type, symbol ) {
        this.name = name;
        this.turn = turn;
        this.type = type;
        this.symbol = symbol;
    };

    // Metodos
    // printX(turn) {
    //     if (turn < 3) {
    //         player1.turn ++ 
    //         FunctionPrintX();
    //     } else {
    //         FunctionChangeX();
    //     }
    // };
}

//INSTANCIAMOS 2 Jugadores

let player1 = new Player(name1, 0, typePlayer1, "X");
let player2 = new Player(name2, 0, typePlayer2, "Y");



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



// Funcion llamada al pulsar row1-col1
TopLeftPush = () => {
    if( myTurn == true){   // LE TOCARIA AL JUGADOR 1

        //Si aun no ha realizado 3 turnos y la casilla esta vacia:
   if((player1.turn < 3) && ( arrayTicTacToe[0][0] == "")){
    arrayTicTacToe[0][0] = "X";
    document.getElementById("r1-c1").innerHTML = "X";
    player1.turn ++; 
    myTurn = false;
    document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
   } else if ((player1.turn >= 3) && ( arrayTicTacToe[0][0] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
    document.getElementById("r1-c1").innerHTML = "";
    arrayTicTacToe[0][0] = "";
   }
   
} else {                   //LE TOCARIA AL JUGADOR 2
    //Si aun no ha realizado 3 turnos y la casilla esta vacia:
    if((player2.turn < 3) && ( arrayTicTacToe[0][0] == "")){
        arrayTicTacToe[0][0] = "O"
        document.getElementById("r1-c1").innerHTML = "O";
        player2.turn ++
        myTurn = true;
        document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
      } else if ((player2.turn >= 3) && ( arrayTicTacToe[0][0] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
        document.getElementById("r1-c1").innerHTML = "";
        arrayTicTacToe[0][0] = "";
       }
}
};


// Funcion llamada al pulsar row1-col2
TopCenterPush = () => {
    if( myTurn == true){   // LE TOCARIA AL JUGADOR 1

        //Si aun no ha realizado 3 turnos y la casilla esta vacia:
   if((player1.turn < 3) && ( arrayTicTacToe[0][1] == "")){
    arrayTicTacToe[0][1] = "X";
    document.getElementById("r1-c2").innerHTML = "X";
    player1.turn ++; 
    myTurn = false;
    document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
   } else if ((player1.turn >= 3) && ( arrayTicTacToe[0][1] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
    document.getElementById("r1-c2").innerHTML = "";
    arrayTicTacToe[0][1] = "";
   }
   
} else {                   //LE TOCARIA AL JUGADOR 2
    //Si aun no ha realizado 3 turnos y la casilla esta vacia:
    if((player2.turn < 3) && ( arrayTicTacToe[0][1] == "")){
        arrayTicTacToe[0][1] = "O"
        document.getElementById("r1-c2").innerHTML = "O";
        player2.turn ++
        myTurn = true;
        document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
      } else if ((player2.turn >= 3) && ( arrayTicTacToe[0][1] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
        document.getElementById("r1-c2").innerHTML = "";
        arrayTicTacToe[0][1] = "";
       }
}
}

// Funcion llamada al pulsar row1-col3
TopRightPush = () => {
    if( myTurn == true){   // LE TOCARIA AL JUGADOR 1

        //Si aun no ha realizado 3 turnos y la casilla esta vacia:
   if((player1.turn < 3) && ( arrayTicTacToe[0][2] == "")){
    arrayTicTacToe[0][2] = "X";
    document.getElementById("r1-c3").innerHTML = "X";
    player1.turn ++; 
    myTurn = false;
    document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
   } else if ((player1.turn >= 3) && ( arrayTicTacToe[0][2] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
    document.getElementById("r1-c3").innerHTML = "";
    arrayTicTacToe[0][2] = "";
   }
   
} else {                   //LE TOCARIA AL JUGADOR 2
    //Si aun no ha realizado 3 turnos y la casilla esta vacia:
    if((player2.turn < 3) && ( arrayTicTacToe[0][2] == "")){
        arrayTicTacToe[0][2] = "O"
        document.getElementById("r1-c3").innerHTML = "O";
        player2.turn ++
        myTurn = true;
        document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
      } else if ((player2.turn >= 3) && ( arrayTicTacToe[0][2] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
        document.getElementById("r1-c3").innerHTML = "";
        arrayTicTacToe[0][2] = "";
       }
}
}

// Funcion llamada al pulsar row2-col1
CenterLeftPush = () => {
    if( myTurn == true){   // LE TOCARIA AL JUGADOR 1

        //Si aun no ha realizado 3 turnos y la casilla esta vacia:
   if((player1.turn < 3) && ( arrayTicTacToe[1][0] == "")){
    arrayTicTacToe[1][0] = "X";
    document.getElementById("r2-c1").innerHTML = "X";
    player1.turn ++; 
    myTurn = false;
    document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
   } else if ((player1.turn >= 3) && ( arrayTicTacToe[1][0] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
    document.getElementById("r2-c1").innerHTML = "";
    arrayTicTacToe[1][0] = "";
   }
   
} else {                   //LE TOCARIA AL JUGADOR 2
    //Si aun no ha realizado 3 turnos y la casilla esta vacia:
    if((player2.turn < 3) && ( arrayTicTacToe[1][0] == "")){
        arrayTicTacToe[1][0] = "O"
        document.getElementById("r2-c1").innerHTML = "O";
        player2.turn ++
        myTurn = true;
        document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
      } else if ((player2.turn >= 3) && ( arrayTicTacToe[1][0] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
        document.getElementById("r2-c1").innerHTML = "";
        arrayTicTacToe[1][0] = "";
       }
}
}


// Funcion llamada al pulsar row2-col2
CenterCenterPush = () => {
    if( myTurn == true){   // LE TOCARIA AL JUGADOR 1

        //Si aun no ha realizado 3 turnos y la casilla esta vacia:
   if((player1.turn < 3) && ( arrayTicTacToe[1][1] == "")){
    arrayTicTacToe[1][1] = "X";
    document.getElementById("r2-c2").innerHTML = "X";
    player1.turn ++; 
    myTurn = false;
    document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
   } else if ((player1.turn >= 3) && ( arrayTicTacToe[1][1] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
    document.getElementById("r2-c2").innerHTML = "";
    arrayTicTacToe[1][1] = "";
   }
   
} else {                   //LE TOCARIA AL JUGADOR 2
    //Si aun no ha realizado 3 turnos y la casilla esta vacia:
    if((player2.turn < 3) && ( arrayTicTacToe[1][1] == "")){
        arrayTicTacToe[1][1] = "O"
        document.getElementById("r2-c2").innerHTML = "O";
        player2.turn ++
        myTurn = true;
        document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
      } else if ((player2.turn >= 3) && ( arrayTicTacToe[1][1] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
        document.getElementById("r2-c2").innerHTML = "";
        arrayTicTacToe[1][1] = "";
       }
}
}


// Funcion llamada al pulsar row2-col3
CenterRightPush = () => {
    if( myTurn == true){   // LE TOCARIA AL JUGADOR 1

        //Si aun no ha realizado 3 turnos y la casilla esta vacia:
   if((player1.turn < 3) && ( arrayTicTacToe[1][2] == "")){
    arrayTicTacToe[1][2] = "X";
    document.getElementById("r2-c3").innerHTML = "X";
    player1.turn ++; 
    myTurn = false;
    document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
   } else if ((player1.turn >= 3) && ( arrayTicTacToe[1][2] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
    document.getElementById("r2-c3").innerHTML = "";
    arrayTicTacToe[1][2] = "";
   }
   
} else {                   //LE TOCARIA AL JUGADOR 2
    //Si aun no ha realizado 3 turnos y la casilla esta vacia:
    if((player2.turn < 3) && ( arrayTicTacToe[1][2] == "")){
        arrayTicTacToe[1][2] = "O"
        document.getElementById("r2-c3").innerHTML = "O";
        player2.turn ++
        myTurn = true;
        document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
      } else if ((player2.turn >= 3) && ( arrayTicTacToe[1][2] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
        document.getElementById("r2-c3").innerHTML = "";
        arrayTicTacToe[1][2] = "";
       }
}
}


// Funcion llamada al pulsar row3-col1
BottomLeftPush= () => {
    if( myTurn == true){   // LE TOCARIA AL JUGADOR 1

        //Si aun no ha realizado 3 turnos y la casilla esta vacia:
   if((player1.turn < 3) && ( arrayTicTacToe[2][0] == "")){
    arrayTicTacToe[2][0] = "X";
    document.getElementById("r3-c1").innerHTML = "X";
    player1.turn ++; 
    myTurn = false;
    document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
   } else if ((player1.turn >= 3) && ( arrayTicTacToe[2][0] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
    document.getElementById("r3-c1").innerHTML = "";
    arrayTicTacToe[2][0] = "";
   }
   
} else {                   //LE TOCARIA AL JUGADOR 2
    //Si aun no ha realizado 3 turnos y la casilla esta vacia:
    if((player2.turn < 3) && ( arrayTicTacToe[2][0] == "")){
        arrayTicTacToe[2][0] = "O"
        document.getElementById("r3-c1").innerHTML = "O";
        player2.turn ++
        myTurn = true;
        document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
      } else if ((player2.turn >= 3) && ( arrayTicTacToe[2][0] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
        document.getElementById("r3-c1").innerHTML = "";
        arrayTicTacToe[2][0] = "";
       }
}
}


// Funcion llamada al pulsar row3-col2
BottomCenterPush= () => {
    if( myTurn == true){   // LE TOCARIA AL JUGADOR 1

        //Si aun no ha realizado 3 turnos y la casilla esta vacia:
   if((player1.turn < 3) && ( arrayTicTacToe[2][1] == "")){
    arrayTicTacToe[2][1] = "X";
    document.getElementById("r3-c2").innerHTML = "X";
    player1.turn ++; 
    myTurn = false;
    document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
   } else if ((player1.turn >= 3) && ( arrayTicTacToe[2][1] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
    document.getElementById("r3-c2").innerHTML = "";
    arrayTicTacToe[2][1] = "";
   }
   
} else {                   //LE TOCARIA AL JUGADOR 2
    //Si aun no ha realizado 3 turnos y la casilla esta vacia:
    if((player2.turn < 3) && ( arrayTicTacToe[2][1] == "")){
        arrayTicTacToe[2][1] = "O"
        document.getElementById("r3-c2").innerHTML = "O";
        player2.turn ++
        myTurn = true;
        document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
      } else if ((player2.turn >= 3) && ( arrayTicTacToe[2][1] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
        document.getElementById("r3-c2").innerHTML = "";
        arrayTicTacToe[2][1] = "";
       }
}
}


// Funcion llamada al pulsar row3-col1
BottomRightPush= () => {
    if( myTurn == true){   // LE TOCARIA AL JUGADOR 1

        //Si aun no ha realizado 3 turnos y la casilla esta vacia:
   if((player1.turn < 3) && ( arrayTicTacToe[2][2] == "")){
    arrayTicTacToe[2][2] = "X";
    document.getElementById("r3-c3").innerHTML = "X";
    player1.turn ++; 
    myTurn = false;
    document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
   } else if ((player1.turn >= 3) && ( arrayTicTacToe[2][2] == "X")) { //Si ya ha gastado todas las fichas y la casilla tiene una "X":
    document.getElementById("r3-c3").innerHTML = "";
    arrayTicTacToe[2][2] = "";
   }
   
} else {                   //LE TOCARIA AL JUGADOR 2
    //Si aun no ha realizado 3 turnos y la casilla esta vacia:
    if((player2.turn < 3) && ( arrayTicTacToe[2][2] == "")){
        arrayTicTacToe[2][2] = "O"
        document.getElementById("r3-c3").innerHTML = "O";
        player2.turn ++
        myTurn = true;
        document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
      } else if ((player2.turn >= 3) && ( arrayTicTacToe[2][2] == "O")) { //Si ya ha gastado todas las fichas y la casilla tiene una "O":
        document.getElementById("r3-c3").innerHTML = "";
        arrayTicTacToe[2][2] = "";
       }
}
}



















