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


// Recupero el tipo de jugador 2 (Human o CPU) y lo escribo en el Panel de Informacion
let typePlayer2 = localStorage.getItem("valueOfHuman2");

if (typePlayer2 == "true") {
    var nameType2 = "HUMAN";
    document.getElementById("nameP2").innerHTML = `Player 2:  ${name2} - ${nameType2} - O`;
} else {
    var nameType2 = "CPU";
    document.getElementById("nameP2").innerHTML = `Player 2:  ${name2} - ${nameType2} - O`;
};

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

if (player2.type == "CPU") {
    myTurn = true;
    document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
} else {
    if (turnoAleatorio % 2 == 0) {
        myTurn = true;
        document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
    } else {
        myTurn = false;
        document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
    }
}


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
        console.log("HAS GANADO JUGADOR 1")
        setTimeout(() => { location.href = "winner.html"; }, 500);
    } else if ((casillas[0].innerHTML == "O") && (casillas[1].innerHTML == "O") && (casillas[2].innerHTML == "O") ||
        (casillas[3].innerHTML == "O") && (casillas[4].innerHTML == "O") && (casillas[5].innerHTML == "O") ||
        (casillas[6].innerHTML == "O") && (casillas[7].innerHTML == "O") && (casillas[8].innerHTML == "O") ||
        (casillas[0].innerHTML == "O") && (casillas[3].innerHTML == "O") && (casillas[6].innerHTML == "O") ||
        (casillas[1].innerHTML == "O") && (casillas[4].innerHTML == "O") && (casillas[7].innerHTML == "O") ||
        (casillas[2].innerHTML == "O") && (casillas[5].innerHTML == "O") && (casillas[8].innerHTML == "O") ||
        (casillas[0].innerHTML == "O") && (casillas[4].innerHTML == "O") && (casillas[8].innerHTML == "O") ||
        (casillas[2].innerHTML == "O") && (casillas[4].innerHTML == "O") && (casillas[6].innerHTML == "O")) {
        console.log("HAS GANADO jugadorrr 2")
        setTimeout(() => { location.href = "winner.html"; }, 500);;
    }
}

// FUNCION QUE PINTA "X" o "O" en funcion del jugador que sea.
//Capturamos en un array todos los elementos.
let casillasObject = document.getElementsByClassName("letter"); // SECUESTRA un ARRAY entero con 9 posiciones ( 9 elementos que tienen la misma clase);

let casillas = Array.from(casillasObject);
console.log(casillas);

// Hemos usado map porque nos permite tratar a cada elemento del array como un objeto(Propiedades + metodos).
// JUEGO TICTACTOE. Para cada casilla del tablero que sea pulsada, y dependiendo de las condiciones, ocurrirá:
casillas.map((casilla) => {
    casilla.addEventListener("click", () => {
        if ((casilla.innerHTML == "") && (player1.turn < 3) && (myTurn == true)) {//Casilla vacia/ tenga las 3 fichas/ turno jugador 1/ jugador 2 es HUMAN.
            casilla.innerHTML = "X";
            Winner();
            player1.turn++
            myTurn = !myTurn;
            if (player2.type == "CPU") {
                cpuFunction();
            }


            document.getElementById("turnOf").innerHTML = (myTurn) ? document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}` : `Turn of  ${player2.name}`;

        } else if ((player1.turn >= 3) && (casilla.innerHTML == "X") && (myTurn == true)) {// Casilla ocupada/ tiene 0 fichas/ turno jugadoor 1/ jugador 2 es HUMAN.
            casilla.innerHTML = "";
            Winner();
            player1.turn--;

        }
        else if ((casilla.innerHTML == "") && (player2.turn < 3) && (myTurn == false) && (player2.type != "CPU")) {//Casilla vacia/ tenga las 3 fichas/ turno jugador 2/ jugador 2 es HUMAN.
            casilla.innerHTML = "O";
            Winner();
            player2.turn++
            myTurn = !myTurn;
            document.getElementById("turnOf").innerHTML = (myTurn) ? document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}` : `Turn of  ${player2.name}`
        }
        else if ((player2.turn >= 3) && (casilla.innerHTML == "O") && (myTurn == false) && (player2.type != "CPU")) {// Casilla ocupada/ tiene 0 fichas/ turno jugador 2/ jugador 2 es HUMAN.
            casilla.innerHTML = "";
            Winner();
            player2.turn--;
        }

    })

});


const cpuFunction = () => {

    // todas las position more/less, son por si coincide que el random es una casilla que no quiero, que pruebe distintas
    //posibilidades( 2 casillas arriba y 2 abajo de la que ha tocado). 
    // let position = Math.floor(Math.random() * 9);


    let position = Math.floor(Math.random() * (5 - 3) + 3);

    let positionMore = position + 1;
    let positionLess = position - 1;
    let positionMoreTwo = position + 2;
    let positionLessTwo = position - 2;
    let positionMoreThree = position + 3;
    let positionLessThree = position - 3;



    //Si esta vacia pinta una 0 coincidiendo con la casilla[numeroaleatoro]: Los siguientes 7 ifs
    if ((myTurn == false) && (player2.turn < 3) && (casillas[position].innerHTML == "")) {
        casillas[position].innerHTML = "O";
        Winner();
        player2.turn++;
        myTurn = true;
        console.log("ESTOY EN IF 1");

    } else if ((myTurn == false) && (player2.turn < 3) && (casillas[positionMore].innerHTML == "")) {
        casillas[positionMore].innerHTML = "O";
        Winner();
        player2.turn++;
        myTurn = true;
        console.log("ESTOY EN IF 2");
    } else if ((myTurn == false) && (player2.turn < 3) && (casillas[positionLess].innerHTML == "")) {
        casillas[positionLess].innerHTML = "O";
        Winner();
        player2.turn++;
        myTurn = true;
        console.log("ESTOY EN IF 3");
    }
    else if ((myTurn == false) && (player2.turn < 3) && (casillas[positionMoreTwo].innerHTML == "")) {
        casillas[positionMoreTwo].innerHTML = "O";
        Winner();
        player2.turn++;
        myTurn = true;
        console.log("ESTOY EN IF 4");
    }
    else if ((myTurn == false) && (player2.turn < 3) && (casillas[positionLessTwo].innerHTML == "")) {
        casillas[positionLessTwo].innerHTML = "O";
        Winner();
        player2.turn++;
        myTurn = true;
        console.log("ESTOY EN IF 5");
    }
    else if ((myTurn == false) && (player2.turn < 3) && (casillas[positionMoreThree].innerHTML == "")) {
        casillas[positionMoreThree].innerHTML = "O";
        Winner();
        player2.turn++;
        myTurn = true;
        console.log("ESTOY EN IF 6");
    }
    else if ((myTurn == false) && (player2.turn < 3) && (casillas[positionLessThree].innerHTML == "")) {
        casillas[positionLessThree].innerHTML = "O";
        Winner();
        player2.turn++;
        myTurn = true; console.log("ESTOY EN IF 7");
    }
    // Si esta ocupada y tiene los 3 turnos gastados(0 fichas):
    else if ((myTurn == false) && (player2.turn >= 3) && (casillas[position].innerHTML == "O")) {
        casillas[position].innerHTML = "";
        console.log(position)
        let newCasilla0 = casillas[position];
        for(let i = 0; i < 8; i++){
            console.log("ESTOY SOLO DENTRO DEL FOR")
            if((casillas[i].innerHTML == "") && (player2.turn < 4) && ( newCasilla0 != casillas[i])){
                console.log("ESTOY DENTRO DEL IF DEL FOR")
                console.log("ESTOY DENTO DEL FOR")
                casillas[i].innerHTML = "O";
                Winner();
                player2.turn ++
                myTurn = true
            } /*else{break}*/;
           
        }
        if (player2.turn == 4){player2.turn --};
        // player2.turn--;
        // pushO();
        console.log("ESTOY EN IF 8");
    } else if ((myTurn == false) && (player2.turn >= 3) && (casillas[positionMore].innerHTML == "O")) {
        casillas[positionMore].innerHTML = "";
        let newCasilla1 = casillas[positionMore]
        for(let i = 0; i < 8; i++){
            console.log("ESTOY DENTO DEL FOR")
            if((casillas[i].innerHTML == "") && (player2.turn < 4) && ( newCasilla1 != casillas[i])){
                console.log("ESTOY DENTRO DEL IF DEL FOR")
                casillas[i].innerHTML = "O";
                Winner();
                player2.turn ++
                myTurn = true
            } /*else{break}*/;
            
        }
        if (player2.turn == 4){player2.turn --};
        // player2.turn--;
        // pushO();
        console.log("ESTOY EN IF 9");
    }
    else if ((myTurn == false) && (player2.turn >= 3) && (casillas[positionLess].innerHTML == "O")) {
        casillas[positionLess].innerHTML = "";
        let newCasilla2 = casillas[positionLess];
        for(let i = 0; i < 8; i++){
            if((casillas[i].innerHTML == "") && (player2.turn < 4) && ( newCasilla2 != casillas[i])){
                console.log("ESTOY DENTRO DEL IF DEL FOR")
                casillas[i].innerHTML = "O";
                Winner();
                player2.turn ++
                myTurn = true
            } /*else{break}*/;
            
        }
        if (player2.turn == 4){player2.turn --};
        // player2.turn--;
        // pushO();
        console.log("ESTOY EN IF 10");

    }
    else if ((myTurn == false) && (player2.turn >= 3) && (casillas[positionMoreTwo].innerHTML == "O")) {
        casillas[positionMoreTwo].innerHTML = "";
        let newCasilla3 = casillas[positionMoreTwo];
        for(let i = 0; i < 8; i++){
            if((casillas[i].innerHTML == "") && (player2.turn < 4) && ( newCasilla3 != casillas[i])){
                console.log("ESTOY DENTRO DEL IF DEL FOR")
                casillas[i].innerHTML = "O";
                Winner();
                player2.turn ++
                myTurn = true
            } /*else{break}*/;
            
        }
        if (player2.turn == 4){player2.turn --};
        // player2.turn--;
        // pushO();
        console.log("ESTOY EN IF 11");
    }
    else if ((myTurn == false) && (player2.turn >= 3) && (casillas[positionLessTwo].innerHTML == "O")) {
        casillas[positionLessTwo].innerHTML = "";
        let newCasilla4 = casillas[positionLessTwo];
        for(let i = 0; i < 8; i++){
            if((casillas[i].innerHTML == "") && (player2.turn < 4) && ( newCasilla4 != casillas[i])){
                console.log("ESTOY DENTRO DEL IF DEL FOR")
                casillas[i].innerHTML = "O";
                Winner();
                player2.turn ++
                myTurn = true
            } /*else{break}*/;
            
        }
        if (player2.turn == 4){player2.turn --};
        // player2.turn--;
        // pushO();
        console.log("ESTOY EN IF 12");
    }
    else if ((myTurn == false) && (player2.turn >= 3) && (casillas[positionMoreThree].innerHTML == "O")) {
        casillas[positionMoreThree].innerHTML = "";
        let newCasilla5 = casillas[positionMoreThree];
        for(let i = 0; i < 8; i++){
            if((casillas[i].innerHTML == "") && (player2.turn < 4) && ( newCasilla5 != casillas[i])){
                console.log("ESTOY DENTRO DEL IF DEL FOR")
                casillas[i].innerHTML = "O";
                Winner();
                player2.turn --
                myTurn = true
            } /*else{break}*/;
            
        }
        if (player2.turn == 4){player2.turn --};
        // player2.turn--;
        // pushO();
        console.log("ESTOY EN IF 13");
    }
    else if ((myTurn == false) && (player2.turn >= 3) && (casillas[positionLessThree].innerHTML == "O")) {
        casillas[positionLessThree].innerHTML = "";
        let newCasilla6 = casillas[positionLessThree];
        for(let i = 0; i <= 8; i++){
            if((casillas[i].innerHTML == "") && (player2.turn < 4)  && ( newCasilla6 != casillas[i])){
                console.log("ESTOY DENTRO DEL IF DEL FOR")
                casillas[i].innerHTML = "O";
                Winner();
                player2.turn ++
                myTurn = true
            } /*else{break}*/;
        }
        if (player2.turn == 4){player2.turn --};
        // player2.turn--;
        // pushO();
        console.log("ESTOY EN IF 14");
    }
    // else if ((myTurn == false) && (player2.turn >= 3) && (casillas[1].innerHTML == "O")) {
    //     casillas[1].innerHTML = "";
    //     let newCasilla6 = casillas[1].innerHTML;
    //     for(let i = 0; i <= 8; i++){
    //         if((casillas[i].innerHTML == "") && (player2.turn < 4)  && ( newCasilla6 != casillas[i].innerHTML)){
    //             console.log("ESTOY DENTRO DEL IF DEL FOR")
    //             casillas[i].innerHTML = "O";
    //             Winner();
    //             player2.turn ++
    //             myTurn = true
    //         } /*else{break}*/;
    //     }
    //     if (player2.turn == 4){player2.turn --};
    //     // player2.turn--;
    //     // pushO();
    //     console.log("ESTOY EN IF new15");

}


const pushO = () => {
    const randomElectionForWriteO = casillas[Math.floor(Math.random() * casillas.length)];
    console.log(randomElectionForWriteO);

    switch (randomElectionForWriteO) {
        case casillas[0]:
            if ((casillas[0].innerHTML == "")) {
                casillas[0].innerHTML = "O";
                Winner();
                player2.turn++;
                myTurn = true;
                return true;
                console.log("ESTOY EN case 0");
            } else { return false };
            break;
        case casillas[1]:
            if ((casillas[1].innerHTML == "")) {
                casillas[1].innerHTML = "O";
                Winner();
                player2.turn++;
                myTurn = true;
                return true;
                console.log("ESTOY EN case 0");
            } else { return false };
            break;
        case casillas[2]:
            if ((casillas[2].innerHTML == "")) {
                casillas[2].innerHTML = "O";
                Winner();
                player2.turn++;
                myTurn = true;
                return true;
                console.log("ESTOY EN case 0");
            } else { return false };
            break;
        case casillas[3]:
            if ((casillas[3].innerHTML == "")) {
                casillas[3].innerHTML = "O";
                Winner();
                player2.turn++;
                myTurn = true;
                return true;
                console.log("ESTOY EN case 0");
            } else { return false };
            break;
        case casillas[4]:
            if ((casillas[4].innerHTML == "")) {
                casillas[4].innerHTML = "O";
                Winner();
                player2.turn++;
                myTurn = true;
                return true;
                console.log("ESTOY EN case 0");
            } else { return false };
            break;
        case casillas[5]:
            if ((casillas[5].innerHTML == "")) {
                casillas[5].innerHTML = "O";
                Winner();
                player2.turn++;
                myTurn = true;
                return true;
                console.log("ESTOY EN case 0");
            } else { return false };
            break;
        case casillas[6]:
            if ((casillas[6].innerHTML == "")) {
                casillas[6].innerHTML = "O";
                Winner();
                player2.turn++;
                myTurn = true;
                return true;
                console.log("ESTOY EN case 0");
            } else { return false };
            break;
        case casillas[7]:
            if ((casillas[7].innerHTML == "")) {
                casillas[7].innerHTML = "O";
                Winner();
                player2.turn++;
                myTurn = true;
                return true;
                console.log("ESTOY EN case 0");
            } else { return false };
            break;
        case casillas[8]:
            if ((casillas[8].innerHTML == "")) {
                casillas[8].innerHTML = "O";
                Winner();
                player2.turn++;
                myTurn = true;
                return true;
                console.log("ESTOY EN case 0");
            } else { return false };
            break;
        default:
            return false
            break;
    }

    // todas las position more/less, son por si coincide que el random es una casilla que no quiero, que pruebe distintas
    //posibilidades( 2 casillas arriba y 2 abajo de la que ha tocado). 

    // if ((myTurn == false) && (player2.turn < 3) && (casillas[8].innerHTML == "") && (player2.type == "CPU")) {
    //     casillas[8].innerHTML = "O";
    //     Winner();
    //     player2.turn++;
    //     myTurn = true;
    //     console.log("ESTOY EN PUSH 1");

    // } else if ((myTurn == false) && (player2.turn < 3) && (casillas[3].innerHTML == "")
    //     && (player2.type == "CPU")
    // ) {
    //     console.log(casillas[3].innerHTML);
    //     casillas[3].innerHTML = "O";
    //     console.log(casillas[3].innerHTML);
    //     Winner();
    //     player2.turn++;
    //     myTurn = true;
    //     console.log("ESTOY EN PUSH 2");
    // } else if ((myTurn == false) && (player2.turn < 3) && (casillas[5].innerHTML == "")
    //     && (player2.type == "CPU")
    // ) {
    //     casillas[5].innerHTML = "O";
    //     Winner();
    //     player2.turn++;
    //     myTurn = true;
    //     console.log("ESTOY EN PUSH 3");
    // }
    // else if ((myTurn == false) && (player2.turn < 3) && (casillas[0].innerHTML == "")
    //     && (player2.type == "CPU")
    // ) {
    //     casillas[0].innerHTML = "O";
    //     Winner();
    //     player2.turn++;
    //     myTurn = true;
    //     console.log("ESTOY EN PUSH 4");
    // }
    // else if ((myTurn == false) && (player2.turn < 3) && (casillas[4].innerHTML == "")
    //     && (player2.type == "CPU")
    // ) {
    //     casillas[4].innerHTML = "O";
    //     Winner();
    //     player2.turn++;
    //     myTurn = true;
    //     console.log("ESTOY EN PUSH 5");
    // }
    // else if ((myTurn == false) && (player2.turn < 3) && (casillas[2].innerHTML == "")
    //     && (player2.type == "CPU")
    // ) {
    //     casillas[2].innerHTML = "O";
    //     Winner();
    //     player2.turn++;
    //     myTurn = true;
    //     console.log("ESTOY EN PUSH 6");
    // }
    // else if ((myTurn == false) && (player2.turn < 3) && (casillas[7].innerHTML == "")
    //     && (player2.type == "CPU")
    // ) {
    //     casillas[7].innerHTML = "O";
    //     Winner();
    //     player2.turn++;
    //     myTurn = true;
    //     console.log("ESTOY EN PUSH 7");
    // } else if ((myTurn == false) && (player2.turn < 3) && (casillas[6].innerHTML == "")
    //     && (player2.type == "CPU")
    // ) {
    //     casillas[6].innerHTML = "O";
    //     Winner();
    //     player2.turn++;
    //     myTurn = true;
    //     console.log("ESTOY EN PUSH 2");
    // } else if ((myTurn == false) && (player2.turn < 3) && (casillas[1].innerHTML == "")
    //     && (player2.type == "CPU")
    // ) {
    //     casillas[1].innerHTML = "O";
    //     Winner();
    //     player2.turn++;
    //     myTurn = true;
    //     console.log("ESTOY EN PUSH 2");
    // }
};




